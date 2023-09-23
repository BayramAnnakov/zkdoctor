pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockToken is ERC20, Ownable {
    constructor() ERC20("MockToken", "MKT") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}