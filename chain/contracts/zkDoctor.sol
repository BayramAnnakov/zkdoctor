pragma solidity ^0.8.17;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import { ERC2771Context, Context } from "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./Structs.sol";     


contract zkDoctor is ERC2771Context, Ownable {
    event InsurancePolicyCreated(uint256 id, uint256 amount, uint256 premium, uint256 startDate, uint256 endDate);
    event InsurancePolicyClaimed(uint256 id, uint256 amount, uint256 claimDate);
    

    IERC20 private _token;

    mapping(uint256 => InsurancePolicy) private _insurancePolicies;

    uint256 private _counter;

    constructor (address trustedForwarder_, IERC20 token_) Ownable() ERC2771Context(trustedForwarder_) {
        _token = token_;
    }

    function token() external view returns (IERC20) {
        return _token;
    }

    function getPolicyDetails(uint256 id) external view returns (InsurancePolicy memory) {
        return _insurancePolicies[id];
    }

    function createNewPolicy(uint256 id, uint256 amount, uint256 premium, uint256 startDate, uint256 endDate) external {
        require(_insurancePolicies[id].id == 0, "Policy already exists");
        require(startDate < endDate, "Start date must be before end date");
        require(endDate > startDate, "End date must be after start date");
        _insurancePolicies[id] = InsurancePolicy(id, amount, premium, startDate, endDate);
        emit InsurancePolicyCreated(id, amount, premium, startDate, endDate);

        _counter++;
    }

    function claimPolicy(uint256 id) external {
        require(_insurancePolicies[id].id != 0, "Policy does not exist");
        require(_insurancePolicies[id].startDate < block.timestamp, "Policy start date should be in the past");
        require(_insurancePolicies[id].endDate > block.timestamp, "Policy end date should be in the future");
        require(_token.transfer(_msgSender(), _insurancePolicies[id].amount), "Transfer failed");

        emit InsurancePolicyClaimed(id, _insurancePolicies[id].amount, block.timestamp);
    }

    function _msgData()
        internal view
        override(Context, ERC2771Context)
        returns (bytes calldata)
    {
        return ERC2771Context._msgData();
    }

    function _msgSender()
        internal view
        override(Context, ERC2771Context)
        returns (address)
    {
        return ERC2771Context._msgSender();
    }

}