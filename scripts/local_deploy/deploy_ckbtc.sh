#!/bin/bash
dfx deploy swap
./LP.sh
set -e

# Create and use the DevJourney identity
# dfx identity new default || true 
# dfx identity use default 

# dfx canister create swap
# dfx  build --all

# Get the principal ID for the minter account
export MINTER="b77ix-eeaaa-aaaaa-qaada-cai"
echo "MINTER principal: $MINTER"

# Set token details
export TOKEN_NAME="ckBTC"
export TOKEN_SYMBOL="ckBTC"
echo "Token Name: $TOKEN_NAME"
echo "Token Symbol: $TOKEN_SYMBOL"

# Set initial parameters
export PRE_MINTED_TOKENS=10_000_000_000_000
export TRANSFER_FEE=10_000

# Switch to the default identity and get its principal ID
dfx identity use DevJourney
export DEFAULT=$(dfx identity get-principal)
echo "DEFAULT principal: $DEFAULT"

# Set archive controller as the default identity for now
export ARCHIVE_CONTROLLER=$(dfx identity get-principal)

# Set archive options
export TRIGGER_THRESHOLD=2000
export NUM_OF_BLOCK_TO_ARCHIVE=1000
export CYCLE_FOR_ARCHIVE_CREATION=10000000000000
export FEATURE_FLAGS=true

# export METADATA_DECIMALS='record { key = "icrc1:decimals"; value = variant { Nat = 18 }; }'

# Deploy the ckbtc canister with the specified initialization arguments
DEPLOY_ARGUMENTS="(variant {Init = record {
  token_symbol = \"${TOKEN_SYMBOL}\";
  token_name = \"${TOKEN_NAME}\";
  minting_account = record { owner = principal \"${MINTER}\" };
  transfer_fee = ${TRANSFER_FEE};
  metadata = vec {};
  feature_flags = opt record{icrc2 = ${FEATURE_FLAGS}};
  initial_balances = vec { record { record { owner = principal \"${DEFAULT}\"; }; ${PRE_MINTED_TOKENS}; }; };
  archive_options = record {
    num_blocks_to_archive = ${NUM_OF_BLOCK_TO_ARCHIVE};
    trigger_threshold = ${TRIGGER_THRESHOLD};
    controller_id = principal \"${ARCHIVE_CONTROLLER}\";
    cycles_for_archive_creation = opt ${CYCLE_FOR_ARCHIVE_CREATION};
  };
}})"
echo "Deploy arguments: $DEPLOY_ARGUMENTS"

dfx deploy ckbtc --argument "$DEPLOY_ARGUMENTS" 


# cargo build --release --target wasm32-unknown-unknown --package valueswap_backend

# candid-extractor ../target/wasm32-unknown-unknown/release/valueswap_backend.wasm > ../src/valueswap_backend/valueswap_backend.did

./deploy_cketh.sh
dfx deploy
# 

# dfx deploy valueswap_fontend
# dfx deploy
# ./LP_ledger.sh
# echo "ckBTC got deployed"

# Check the balance of the default identity
# balance=$(dfx canister call ckbtc icrc1_balance_of "(record {owner=principal\"${DEFAULT}\"; subaccount=null})")
# echo "Balance of the DEFAULT account: $balance"

