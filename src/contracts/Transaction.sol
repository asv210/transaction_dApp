// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    address private owner;

    mapping (address => bool)private validAdmin;

     address[] private admins;

     constructor(address _admins){
        validAdmin[_admins]=true;
        admins.push(_admins);
     }

    
    struct TransferStruct {
        string sender;
        string receiver;
        string amount;
        string remark;
        uint256 timestamp;
        uint256 id;
    }
    
    TransferStruct[] transactions;
    mapping(uint=>TransferStruct)keyToTransaction; 

    function getOwner() public view returns (address) {
        return msg.sender;
    }

    modifier authorizeUser{
        require(validAdmin[msg.sender], "Unauthorized: Only admins can execute this function");
        _; 

    }

  function sendMoney(string memory sender,string memory receiver,string memory amount,string memory remark, uint256 id) public authorizeUser{

    
     TransferStruct memory transaction=TransferStruct(sender,
            receiver,
            amount,
            remark,
            block.timestamp,
            id);
    transactions.push(
        transaction
    );
    keyToTransaction[id]=transaction;
    }

    function getAllTransactions() public view returns(TransferStruct[] memory) {
        return transactions;
    }

    function getTransaction(uint256 key) public  view returns (TransferStruct memory){
        return keyToTransaction[key];
    }

    function addAdmins(address admin)public authorizeUser{
        validAdmin[admin]=true;
        admins.push(admin);
    }
    function getAdmins()public view returns(address[] memory){
        return admins;
    }
} 