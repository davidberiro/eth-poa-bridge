pragma solidity ^0.5.0;

import './token/ERC20/ERC20Mintable.sol';

contract Dai is ERC20Mintable {
    string public symbol = 'DAI';
    uint16 public decimals = 18;

    // constructor() internal {
        // mint(msg.sender, 1000000000000000000000000); // mint 1mil dai
    // }
}