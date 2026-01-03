# Donation partition

![Sui](https://img.shields.io/badge/Sui-v1.62.0-blue)
![Network](https://img.shields.io/badge/network-Sui%20Testnet-green)
![Edition](https://img.shields.io/badge/Move-2024.beta-orange)

## Summary
![suiscan(Digest)](https://suiscan.xyz/testnet/tx/4dp4jtZc5F92iZomdDG5XjAUy5LtUsxFr6jKFvaAgtPJ)
![suiscan(PackageId)](https://suiscan.xyz/testnet/object/0x3f5d907c0cf3dc98aedcd18e5fa2aa368510586137754d7bad4ba9234725dd23//tx-blocks)


## Build & test 
```bash
cd donation_partition
sui move build
sui move test
```

- Check env & gas fee
```bash
sui client active-env
sui client gas
```

- Publish
```bash
sui client publish --gas-budget 100000000
```

## Extendibility

- Add: **AdminCap** property to edit members or to modify distribution ratio.

## Receipt
Transaction Digest: 4dp4jtZc5F92iZomdDG5XjAUy5LtUsxFr6jKFvaAgtPJ
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Data                                                                                             │
├──────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Sender: 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b                                   │
│ Gas Owner: 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b                                │
│ Gas Budget: 100000000 MIST                                                                                   │
│ Gas Price: 1000 MIST                                                                                         │
│ Gas Payment:                                                                                                 │
│  ┌──                                                                                                         │
│  │ ID: 0xca2256a27cf4f1fabe79d4f5b1d41a3f77c3995de3cb73993c3a6dca2694e970                                    │
│  │ Version: 349180729                                                                                        │
│  │ Digest: BwKGVYcHY6fWfby3MLgXVGGpge24BENUEXAdURxRBmYV                                                      │
│  └──                                                                                                         │
│                                                                                                              │
│ Transaction Kind: Programmable                                                                               │
│ ╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮ │
│ │ Input Objects                                                                                            │ │
│ ├──────────────────────────────────────────────────────────────────────────────────────────────────────────┤ │
│ │ 0   Pure Arg: Type: address, Value: "0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b" │ │
│ ╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯ │
│ ╭─────────────────────────────────────────────────────────────────────────╮                                  │
│ │ Commands                                                                │                                  │
│ ├─────────────────────────────────────────────────────────────────────────┤                                  │
│ │ 0  Publish:                                                             │                                  │
│ │  ┌                                                                      │                                  │
│ │  │ Dependencies:                                                        │                                  │
│ │  │   0x0000000000000000000000000000000000000000000000000000000000000001 │                                  │
│ │  │   0x0000000000000000000000000000000000000000000000000000000000000002 │                                  │
│ │  └                                                                      │                                  │
│ │                                                                         │                                  │
│ │ 1  TransferObjects:                                                     │                                  │
│ │  ┌                                                                      │                                  │
│ │  │ Arguments:                                                           │                                  │
│ │  │   Result 0                                                           │                                  │
│ │  │ Address: Input  0                                                    │                                  │
│ │  └                                                                      │                                  │
│ ╰─────────────────────────────────────────────────────────────────────────╯                                  │
│                                                                                                              │
│ Signatures:                                                                                                  │
│    uGk355CNolfNnx+rSS5y4vS5IZgJQlL6mB+5z/5xKyBrFFQ5HWFgJXA+ped8l+RpQyq5UjVv+9/lgNF5CBE2Ag==                  │
│                                                                                                              │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Transaction Effects                                                                               │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Digest: 4dp4jtZc5F92iZomdDG5XjAUy5LtUsxFr6jKFvaAgtPJ                                              │
│ Status: Success                                                                                   │
│ Executed Epoch: 968                                                                               │
│                                                                                                   │
│ Created Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0x3f5d907c0cf3dc98aedcd18e5fa2aa368510586137754d7bad4ba9234725dd23                         │
│  │ Owner: Immutable                                                                               │
│  │ Version: 1                                                                                     │
│  │ Digest: Fgkkb2zhyNMDQYuF1yB4o6d6NUnAL3kTfYNgkTZ3yBq9                                           │
│  └──                                                                                              │
│  ┌──                                                                                              │
│  │ ID: 0x64bf06c80a50870ac3b30d070c824d74ec23435f12b8b7cb1451edba4d080640                         │
│  │ Owner: Account Address ( 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b )  │
│  │ Version: 349180730                                                                             │
│  │ Digest: 7AK9ZktQMKdyHABmQBev6GvYhmYf5Xcjab3T31szQfD9                                           │
│  └──                                                                                              │
│ Mutated Objects:                                                                                  │
│  ┌──                                                                                              │
│  │ ID: 0xca2256a27cf4f1fabe79d4f5b1d41a3f77c3995de3cb73993c3a6dca2694e970                         │
│  │ Owner: Account Address ( 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b )  │
│  │ Version: 349180730                                                                             │
│  │ Digest: FXRVT2ZXmVQbqhVbCzzjJe36obTar3vART2wmMpVf3sx                                           │
│  └──                                                                                              │
│ Gas Object:                                                                                       │
│  ┌──                                                                                              │
│  │ ID: 0xca2256a27cf4f1fabe79d4f5b1d41a3f77c3995de3cb73993c3a6dca2694e970                         │
│  │ Owner: Account Address ( 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b )  │
│  │ Version: 349180730                                                                             │
│  │ Digest: FXRVT2ZXmVQbqhVbCzzjJe36obTar3vART2wmMpVf3sx                                           │
│  └──                                                                                              │
│ Gas Cost Summary:                                                                                 │
│    Storage Cost: 13862400 MIST                                                                    │
│    Computation Cost: 1000000 MIST                                                                 │
│    Storage Rebate: 978120 MIST                                                                    │
│    Non-refundable Storage Fee: 9880 MIST                                                          │
│                                                                                                   │
│ Transaction Dependencies:                                                                         │
│    2BNuLYzJ44M4TUWDYrZd3Ve2mcAuz1hWg6toU4jsJoeX                                                   │
│    FoU4gYTAzwvNfsCmiRkVGe6Has45kWzDN14wTJb3JM86                                                   │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯
╭─────────────────────────────╮
│ No transaction block events │
╰─────────────────────────────╯

╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Object Changes                                                                                   │
├──────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Created Objects:                                                                                 │
│  ┌──                                                                                             │
│  │ ObjectID: 0x64bf06c80a50870ac3b30d070c824d74ec23435f12b8b7cb1451edba4d080640                  │
│  │ Sender: 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b                    │
│  │ Owner: Account Address ( 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b ) │
│  │ ObjectType: 0x2::package::UpgradeCap                                                          │
│  │ Version: 349180730                                                                            │
│  │ Digest: 7AK9ZktQMKdyHABmQBev6GvYhmYf5Xcjab3T31szQfD9                                          │
│  └──                                                                                             │
│ Mutated Objects:                                                                                 │
│  ┌──                                                                                             │
│  │ ObjectID: 0xca2256a27cf4f1fabe79d4f5b1d41a3f77c3995de3cb73993c3a6dca2694e970                  │
│  │ Sender: 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b                    │
│  │ Owner: Account Address ( 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b ) │
│  │ ObjectType: 0x2::coin::Coin<0x2::sui::SUI>                                                    │
│  │ Version: 349180730                                                                            │
│  │ Digest: FXRVT2ZXmVQbqhVbCzzjJe36obTar3vART2wmMpVf3sx                                          │
│  └──                                                                                             │
│ Published Objects:                                                                               │
│  ┌──                                                                                             │
│  │ PackageID: 0x3f5d907c0cf3dc98aedcd18e5fa2aa368510586137754d7bad4ba9234725dd23                 │
│  │ Version: 1                                                                                    │
│  │ Digest: Fgkkb2zhyNMDQYuF1yB4o6d6NUnAL3kTfYNgkTZ3yBq9                                          │
│  │ Modules: donation                                                                             │
│  └──                                                                                             │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
╭───────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Balance Changes                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────────────────────┤
│  ┌──                                                                                              │
│  │ Owner: Account Address ( 0x6bd2f986b92f86cc79cfc93d5ca5b01ce05793fd4fab1e39005ec0c804c9d75b )  │
│  │ CoinType: 0x2::sui::SUI                                                                        │
│  │ Amount: -13884280                                                                              │
│  └──                                                                                              │
╰───────────────────────────────────────────────────────────────────────────────────────────────────╯