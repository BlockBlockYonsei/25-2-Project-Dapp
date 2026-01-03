module donation_partition::donation;
use sui::coin::{Self, Coin};
use sui::sui::SUI;
use sui::event;

// Error Const
const EInvalidRatioSum: u64 = 1; // 비율 합이 100이 아님
const EVectorLengthMismatch: u64 = 2; // 주소와 비율 리스트 길이 불일치
const EEmptyTeam: u64 = 3;

public struct CreatorTeam has key, store {
    id: UID,
    members: vector<address>,
    ratios: vector<u64>,
    total_donation: u64
}

public struct DonationEvent has copy, drop {
    donor: address,             // 후원자 주소
    team_id: ID,                // 후원받은 팀 객체 ID
    total_amount: u64,          // 총 후원금
    timestamp: u64,             // 트랜잭션 타임스탬프 (Clock 사용 시)
    distributed_amounts: vector<u64> // 각 멤버별 분배된 금액 리스트
}

public fun create_team(
    members: vector<address>,
    ratios: vector<u64>,
    ctx: &mut TxContext
) {
    // 1. 유효성 검사
    assert!(vector::length(&members) == vector::length(&ratios), EVectorLengthMismatch);
    assert!(!vector::is_empty(&members), EEmptyTeam);

    let mut sum = 0;
    let len = vector::length(&ratios);
    let mut i = 0;
    while (i < len) {
        sum = sum + *vector::borrow(&ratios, i);
        i = i + 1;
    };

    // 비율의 합이 100%인지 확인
    assert!(sum == 100, EInvalidRatioSum);

    // 2. 객체 생성 및 공유 (Shared Object로 설정하여 누구나 접근 가능하게 함)
    let team = CreatorTeam {
        id: object::new(ctx),
        members,
        ratios,
        total_donation: 0,
    };
    transfer::share_object(team);
}

public fun donate(
    team: &mut CreatorTeam,
    mut payment: Coin<SUI>,
    ctx: &mut TxContext
) {
    let total_value = coin::value(&payment);
    let donor_address = tx_context::sender(ctx);

    // 팀 누적 후원액 업데이트
    team.total_donation = team.total_donation + total_value;

    let members_len = vector::length(&team.members);
    let mut distributed_log = vector::empty<u64>();
    
    
    let mut i = 0;
    // 마지막 멤버 전까지 루프
    while (i < members_len - 1) {
        let member_addr = *vector::borrow(&team.members, i);
        let ratio = *vector::borrow(&team.ratios, i);
        
        // 분배 금액 계산 (내림 계산됨)
        let split_amount = (total_value * ratio) / 100;
        
        // 메인 payment 코인에서 split_amount만큼 분할
        let split_coin = payment.split(split_amount, ctx);
        // 해당 멤버에게 전송
        transfer::public_transfer(split_coin, member_addr);
        
        // 로그 기록
        vector::push_back(&mut distributed_log, split_amount);
        
        i = i + 1;
    };

    // 마지막 멤버에게는 남은 코인(payment)을 통째로 전송 (나머지 처리)
    let last_member_idx = members_len - 1;
    let last_member_addr = *vector::borrow(&team.members, last_member_idx);
    let remaining_amount = coin::value(&payment);
    
    transfer::public_transfer(payment, last_member_addr);
    vector::push_back(&mut distributed_log, remaining_amount);

    // 3. 투명성을 위한 이벤트 발생
    event::emit(DonationEvent {
        donor: donor_address,
        team_id: object::uid_to_inner(&team.id),
        total_amount: total_value,
        timestamp: ctx.epoch_timestamp_ms(),
        distributed_amounts: distributed_log
    });
}