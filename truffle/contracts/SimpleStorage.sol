// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract SimpleStorage {
    uint256 balance;
    address public admin;

    constructor() {
        admin = msg.sender;
        balance = 0;
        updateBalance();
    }

    function updateBalance() internal {
        balance += msg.value;
    }

    function Withdrawl(uint256 _amt) public{
        require(msg.sender == admin);
        balance = balance - _amt;
    }

    function Deposite() public payable {
         balance = balance + msg.value;
    }
    //  function sendEth() public payable{
    //     require(block.timestamp < deadline,"Deadline has passed");
    //     require(msg.value >=minimumContribution,"Minimum Contribution is not met");
        
    //     if(donors[msg.sender]==0){
    //         noOfdonors++;
    //     }
    //     donors[msg.sender]+=msg.value;
    //     collectedAmount+=msg.value;
    // }

    function Balance() public view returns (uint256) {
        return balance;
    }

}