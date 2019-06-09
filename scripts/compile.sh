#!/bin/bash
solc="docker run -v $HOME/fuck-around/eth-poa-bridge:/solidity ethereum/solc:0.5.0"
OUTPUT_PATH=/solidity/build
CONTRACTS_PATH=/solidity/contracts
$solc --optimize --optimize-runs 200 --abi --bin --allow-paths $CONTRACTS_PATH, -o $OUTPUT_PATH --overwrite $CONTRACTS_PATH/Dai.sol