// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Staking {
    mapping(address => uint256) public balances;
    mapping(address => uint256) public timestamps;

    function stake() public payable {
        require(msg.value > 0, "Need to stake something");
        balances[msg.sender] += msg.value;
        timestamps[msg.sender] = block.timestamp;
    }

    function withdraw() public {
        require(balances[msg.sender] > 0, "Nothing to withdraw");
        uint256 amount = balances[msg.sender];
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function balanceOf(address user) public view returns (uint256) {
        return balances[user];
    }
}
