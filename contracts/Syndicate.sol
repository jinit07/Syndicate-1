// SPDX-License-Identifier: MIT
// contracts/Syndicate.sol

pragma solidity ^0.8.0;

contract Syndicate {
    struct User {
        address addr;
        string role;
        string name;
        string dob;
        string college;
        string designation;
    }

    mapping(address => User) public users;
    mapping(bytes32 => bool) public approvedPapers;

    event UserRegistered(address indexed userAddress, string role);
    event PaperUploaded(bytes32 paperHash, address indexed professor);
    event PaperApproved(bytes32 paperHash, address indexed admin);

    function registerUser(
        string memory _role,
        string memory _name,
        string memory _dob,
        string memory _college,
        string memory _designation
    ) public {
        users[msg.sender] = User(msg.sender, _role, _name, _dob, _college, _designation);
        emit UserRegistered(msg.sender, _role);
    }

    function uploadPaper(bytes32 paperHash) public {
        require(
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256("professor"),
            "Only professors can upload papers"
        );
        emit PaperUploaded(paperHash, msg.sender);
    }

    function approvePaper(bytes32 paperHash) public {
        require(
            keccak256(abi.encodePacked(users[msg.sender].role)) == keccak256("admin"),
            "Only admins can approve papers"
        );
        approvedPapers[paperHash] = true;
        emit PaperApproved(paperHash, msg.sender);
    }

    function isPaperApproved(bytes32 paperHash) public view returns (bool) {
        return approvedPapers[paperHash];
    }
}
