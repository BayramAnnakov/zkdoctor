pragma solidity ^0.8.17;


struct InsurancePolicy {
    uint256 id;
    uint256 amount;
    uint256 premium;
    uint256 startDate;
    uint256 endDate;
}