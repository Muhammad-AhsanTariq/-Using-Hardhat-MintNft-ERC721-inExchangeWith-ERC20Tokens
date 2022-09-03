// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract myNFT is ERC721{

    using Counters for Counters.Counter;
    IERC20 public tokenAddress;
    uint public rate = 5;

    Counters.Counter private _tokenIdCounter;
    address public owner;
    constructor(address _tokenAddress) ERC721("MyNFT", "MTK") {
        owner = msg.sender;
        tokenAddress = IERC20(_tokenAddress);
    }
       mapping(address => uint) private _balance;
    
    function safeMint() public {
        tokenAddress.transferFrom(msg.sender,owner, rate);
        
         _balance[owner] += rate;
        
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }
     
      function ownerBalance()public view returns (uint256) {
        return _balance[owner];
    }
    
    
}