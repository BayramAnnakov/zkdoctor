const {config} = require("dotenv");
config();

const { Network, Alchemy, Wallet} = require('alchemy-sdk');
const { ethers, Contract, Interface } = require('ethers');

const {execute, PoliciesCreatedQueryDocument} = require('./.graphclient')

const settings = {
    network: Network.BASE_GOERLI,
    apiKey: process.env.ALCHEMY_API_KEY,
};

const alchemy = new Alchemy(settings);


const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "claimDate",
				"type": "uint256"
			}
		],
		"name": "InsurancePolicyClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "premium",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			}
		],
		"name": "InsurancePolicyCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "claimPolicy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "premium",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endDate",
				"type": "uint256"
			}
		],
		"name": "createNewPolicy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "trustedForwarder_",
				"type": "address"
			},
			{
				"internalType": "contract IERC20",
				"name": "token_",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "getPolicyDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "premium",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "startDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endDate",
						"type": "uint256"
					}
				],
				"internalType": "struct InsurancePolicy",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "forwarder",
				"type": "address"
			}
		],
		"name": "isTrustedForwarder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const zkDoctorInterface = new Interface(abi);

const zkDoctorAddress = '0xcABd2c6117E4f850aaEf145E985394223C847513';


var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/getAllPolicies', async (req, res) => {
    const response = await execute(PoliciesCreatedQueryDocument);

    res.status(200).json(response.data.insurancePolicyCreateds);
        
});


app.get('/api/policy/:id', async (req, res) => {
    try {

        const policyId = parseInt(req.params.id);

        console.log('Fetching policy details for policy id:', policyId);
        
        const wallet = new Wallet(process.env.PRIVATE_KEY, alchemy);
        const zkDoctorContract = new Contract(zkDoctorAddress, zkDoctorInterface, wallet);

        const owner = await zkDoctorContract.owner();
        console.log('Owner:', owner);

        const policyDetails = await zkDoctorContract.getPolicyDetails(policyId);

        if (policyDetails) {
            console.log('Policy Details:', policyDetails);
            res.status(200).json({ premium: Number(policyDetails.premium), endDate: Number(policyDetails.endDate) });
        } else {
            console.error('No policy details returned');
            res.status(404).json({ error: 'No policy details returned' });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Could not fetch policy details' });
      }
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});