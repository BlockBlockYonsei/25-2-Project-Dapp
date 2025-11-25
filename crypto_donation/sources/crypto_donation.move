module crypto_donation::crypto_donation;

use std::string::{String};
use sui::sui::SUI;
use sui::balance::Balance;
use sui::balance;
use sui::coin::Coin;
use sui::coin;

public entry struct Creator has key{
    id: UID,
    name: String,
    description: String,
    img: String,
    creator_urls: vector<String>,
    balance: Balance<SUI>,
    tags: vector<u64>
}

public struct CreatorCap has key, store{
    id: UID,
    creator_id: ID
}

#[allow(lint(self_transfer))]
public fun register_creator(name: String, description: String, img: String, creator_urls: vector<String>, tags: vector<u64>, ctx: &mut TxContext){

    let creator = Creator{
        id: object::new(ctx),
        name: name,
        description: description,
        img: img,
        creator_urls: creator_urls,
        balance: balance::zero(),
        tags: tags
    };

    let creator_cap = CreatorCap{
        id: object::new(ctx),
        creator_id: creator.id.to_inner()
    };

    transfer::share_object(creator);
    transfer::transfer(creator_cap, ctx.sender());

}

public fun donate(creator: &mut Creator, money: Coin<SUI>) {

    let money_balance = coin::into_balance<SUI>(money);
    balance::join<SUI>(&mut creator.balance, money_balance);

    // creator.balance.join(money.into_balance());

}

#[allow(lint(self_transfer))]
public fun withdraw(creator: &mut Creator, creator_cap: &CreatorCap, ctx: &mut TxContext) {
    assert!(creator.id.to_inner() == creator_cap.creator_id);

    let money = creator.balance.withdraw_all();
    transfer::public_transfer(money.into_coin(ctx), ctx.sender());

}

