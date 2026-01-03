#[test_only]
module donation_partition::donation_tests;
use sui::test_scenario;
use sui::coin::{Self, Coin};
use sui::sui::SUI;
use donation_partition::donation::{Self, CreatorTeam};

// 테스트용 주소
const ADMIN: address = @0xA;
const MEMBER1: address = @0xB;
const MEMBER2: address = @0xC;
const MEMBER3: address = @0xD;
const DONOR: address = @0xE;

#[test]
fun test_donation_split() {
    // 1. 시나리오 시작 (Admin이 팀 생성)
    let mut scenario = test_scenario::begin(ADMIN);
    {
        let members = vector[MEMBER1, MEMBER2, MEMBER3];
        let ratios = vector[70, 20, 10];
        
        donation::create_team(members, ratios, scenario.ctx());
    };

    // 2. 트랜잭션 진행: Donor가 후원 실행
    scenario.next_tx(DONOR);
    {
        // 공유 객체(Team) 가져오기
        let mut team = scenario.take_shared<CreatorTeam>();
        
        // 테스트용 100 SUI 생성 (MIST 단위 주의: 여기선 계산 편의상 100단위로 가정)
        let donation_amount = 100; 
        let coin = coin::mint_for_testing<SUI>(donation_amount, scenario.ctx());

        // 후원 함수 호출
        donation::donate(&mut team, coin, scenario.ctx());

        // 공유 객체 반환
        test_scenario::return_shared(team);
    };

    // 3. 검증: 각 멤버의 지갑 잔액 확인
    // MEMBER1 (70%) 확인
    scenario.next_tx(MEMBER1);
    {
        // MEMBER1의 주소로 전송된 코인이 있는지 확인
        // 실제 환경에서는 합쳐질 수 있지만 테스트에선 개별 코인 객체로 옴
        let coin = scenario.take_from_sender<Coin<SUI>>();
        assert!(coin.value() == 70, 0); // 100 * 0.7 = 70
        scenario.return_to_sender(coin);
    };

    // MEMBER2 (20%) 확인
    scenario.next_tx(MEMBER2);
    {
        let coin = scenario.take_from_sender<Coin<SUI>>();
        assert!(coin.value() == 20, 1); // 100 * 0.2 = 20
        scenario.return_to_sender(coin);
    };

    // MEMBER3 (10%) 확인 - 마지막 멤버는 나머지(remainder) 처리 로직 검증 포함
    scenario.next_tx(MEMBER3);
    {
        let coin = scenario.take_from_sender<Coin<SUI>>();
        assert!(coin.value() == 10, 2); // 100 * 0.1 = 10
        scenario.return_to_sender(coin);
    };

    scenario.end();
}

// 실패 케이스 테스트: 비율 합이 100이 아닐 때
#[test]
#[expected_failure(abort_code = donation_partition::donation::EInvalidRatioSum)]
fun test_invalid_ratio() {
    let mut scenario = test_scenario::begin(ADMIN);
    {
        let members = vector[MEMBER1, MEMBER2];
        let ratios = vector[50, 40]; // 합이 90 (오류 발생해야 함)
        
        donation::create_team(members, ratios, scenario.ctx());
    };
    scenario.end();
}