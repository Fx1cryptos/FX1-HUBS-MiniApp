// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FX1FreeMint is ERC721, Ownable {
    uint256 public totalSupply;
    uint256 public maxSupply;
    string public baseURI;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _maxSupply,
        string memory _baseURI
    ) ERC721(_name, _symbol) {
        maxSupply = _maxSupply;
        baseURI = _baseURI;
    }

    function mint() external {
        require(totalSupply + 1 <= maxSupply, "Max supply reached");
        uint256 tokenId = totalSupply + 1;
        totalSupply = tokenId;
        _safeMint(msg.sender, tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _newURI) external onlyOwner {
        baseURI = _newURI;
    }
}
