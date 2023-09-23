import React from 'react';
import { useState, useEffect } from 'react';
import './ModelList.css';

const { ethers, BrowserProvider } = require('ethers');

const verifierContractAddress = '0xD185ef65EE2a77d9eF92A4375AaBF8B2fd859976';
const verifierContractAbi = [
	{
		"inputs": [
			{
				"internalType": "uint256[3]",
				"name": "instances",
				"type": "uint256[3]"
			},
			{
				"internalType": "bytes",
				"name": "proof",
				"type": "bytes"
			}
		],
		"name": "verify",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const zkDoctorContractAddress = '0xcABd2c6117E4f850aaEf145E985394223C847513';

const zkDoctorContractAbi = [
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

//const output = [35, 8, 0];
//const proof = '0x0d066a90614f3497231674583f8099f1f9eb773d204f25f2eb888752dc9fbdff06edf4379c5ca7ae9255cd1a7e083c6d0edb2c92f42936f7d90b77119d7e474b2c707e1593a34a3e8722974ff3b9ee560fe9e2d815e7f6df542602cb3e9623d318a533a30e0a7cd8bea80b0eadcf58f84d410f9ba05418ca4170ce120010179a1fb0208e36d2417e4a483b6c1f17db027e41e185557d1e419de6b0edfc9813510345b5f0ae2a7d47cf94643d9f73a76e64d5df971fe3efe95200aaf666fd45f3093591b70694a880b80ef5d458bd6fca61d53f63185148f3faacbfbf995cd039074773d8f9e8ae33bfe8422762278b3cebc4477b617e10eb9d273d6b6b4472bd148654eb1489b27f40309f221e946d01c85ecbd39b25d99764236b30195fcbbf0a4cb0ec42e0636fbe581ed4ea27c18974c349d295f183862f59703efbaddbba24a28ce995dc5de4e8796a4783a497d813ec24598b78d77453d63ee9aa5080d31bd7883d9856b18a66730657e1add5dc1e828f5732cf6a1130b9b56a5ab51fa60f20e5507bd4a63c85c976f9a956f3fec0063a0e17af4ed50bf30b1c1cc599412b5ca33127b7de36a87b081539fa15b14bb26ebd97da76f0950f4b320725a6422a4b7ee0eb3c3023ff42064f412efa210c9013555e636d24aebe53cb1ab413b911e356b7f95d6cc064b97deb69c866f4f3d709d4f9c4a9ead98e075852e4c59b193ab16035fe38a3cd73c00f0d8bf5728d23c1b85552f289b67c12615a141e9d098f37c5310e09bc038411f30c245ff5763272876e08930c808d8e18a4fc45810b250eaf814dfdc757b5335782111c403a226c9a7ca9b1beed9b7f07d7e3db9100355a8725d571922ba7c2c71e9b223b6f08223f43540fc4a52dedc9213facc60fca88ce10ec2159c618997f8c0d78a03fb1e542daa0145a9802d84a70290a642c8b4cbe52e4f50d12b1aa96d7ce07420be8d1603ba80947e1ce909c88ae536f23aa5599cdf750bcf0e4f7f51f1e8a832a013595040b06ba87d8224cb1179d2929108c10ec008057958686babd3d164df45d5df64c26c9e7730183dd65e9b7c806b79f463c47a863714018abd8c2617c6ab729615d0cc4b325da1d1368cdeae61e82c47ca886f2cc6f01d67d3a037af98271960bbec9461410648297d6403cc613f661426d4e6a61b3154c2883a6e0ad14345561f975541c994bfdc157cb0e5114902684d783cbefd4c0e539871b276cda6575a4dd6700917c0bb6b27302808d24d9c3688231cc9aef93f6a7f6f1c0476a266d3fc582f36947179b4b5a306ac22b9796794b72397d3b197e3d596fe10306990a2a7bd472c5a07d0f41b668daf0288eb941527f5ef9d429cfbb7ea802ba9c505bbfb008a2e4f640ffe7c232eced24e94cfeba166c18b2446ec47d1bf14ce57505cb7c8c146741038ec77fec9d8605df41b0b0625a134c66e549cde583b714faef8a8ee7447b423997763cb836dc045b0cdb441991744cc7069d67ecf29c3aeadfc2ba0a062a022717486cb504ce287da27c698cd7642d571f1a32350a6ed9611dfac8d126b75d9dabd5ea02e97d2e248456b096d34886ddfb66bb996557aaaf48bed52d87cc8e029f51d903623f00000000000000000000000000000000000000000000000000000000000000001496fae1deb4c04228d3a34e37f7a3b9c092fffddd0ff86ee62b5b5650405ae918164236d9d20e8a9e8df6013a4ee1568f89e98ceadbdf34de2f6eed7a36cd1a17be41bcd3a973a3e3e717e5376e3f15043c84543330e8a3a0299b965d8f711a19b208de76a9428b312aaca2dc2ee5eed07a8451b6966f15a65c86ed2be3f82c1276ef45ac45e25bf6f1ed075649c626aaab19baa1bdbefebadc43b49df0dd1712f60bced9a15f4ef0ef03656d20790c00c1958e0333ab2f9798374b24077fd900000000000000000000000000000000000000000000000000000000000000000e429cf925ca2dd39edd83577e096fc1614a919403d85377a71a51c52c8ddce40000000000000000000000000000000000000000000000000000000000000000174fd6ff384e3ced54bf5c43f35f131cc7f5472a4778deebd997a6327ae80c301d622d869a32fa50cbbc462df9c54cd119db5a20901c02d78ced77add289e8a127b97a4ccd9236b87e99a799678a33b6784baa8613a662b3cea299876dc90b4901f538bcbbf847973b3e5da749a7c2a01f1784ebedbb3d1db4e0285da2caa59b092f04b6a9e2875bb6ab13f036c8f5060c04a69ebd9d4b1e8c640338c4cd0154254978b8560806dd8876b8b78bb998e4c994c07549783eacddbf56b50c0c0cf02cecc37988176d580bfada90dd28eb466ae873fcc9bd1a47f7ddcb61d684180c2bb943190c94032ba78f63dadf2d6a8989375dedc02566fb23044903b9d035e71d0f6aee7485093d19cdaf2c993be6a26c862e68f4a63a385aff7f0eea54be401562bb645738b1d05c1e3d6700fc0e50398d206efd91a95985e13a99392b6baa11953c08c5e86c0abf56bc78b592607f5cf72588c7aad1f905547b2f639e38ae2eadbea55c3a17186b491ae83c0e45061a36b87d8f6f9095d653485fa9a2ff7c1576e477953a6880295083c485bec1d458b658e68cae4d55c5029609c6a22d3011cd099dbe733548c303c3c99956eb03e8077e1a179110aa7ecee95ed9fe29862114f486cde233dfc509e2dfabef24f93e69291a82a24f20602dabeb50b9d585056feae06ee52b9ed23347a6be0f4cf577fb36c287c317b38e45f30392594b300738c3b01d6aeff6ce466ce21f81b3368a0928c9da1b047560343331dd0a344408be77fc5b479998c0bad18d319fd1bf05f0f298262ebab5376ed240e2b1eeff2429e84fc79de2a21f22c619e81117dbf8952e9b4b4fcd2dd983f418ca1f8d391f8b7ecc1ac2adf638ec8996d1d395e312e2a1e621941568c23018cc2e5e31f417be316f34b8155eb3ccbbcf7fb0cb19ee4a7c44ce44bf2433776fe1b7a1160622f66b37a248d30afc05bbc001f4ba42f923df7222c8e0ace1cab9157995cbb10b6c537cdc124a9614677b3fb63fd89dd76b8c415a7d1718f4f2d8ac71b18c1a0feb77fbc1e00d764e3fbe15dfbcedddf1476fb79b7c68810a6ee150acdda0a009f87436c36515987b55373c8c49d1cf7c6e989518e84d409290e170f735e9670bc2a71aa75965e31448f30e99e0bc273359d49e4c4962c81c761028a853f0cd2d13cbfd77619fe78932fc9c16bafb1c8f5f214f7c5e8051c3486416940dc6492a30fb1d113d8829d074f8cf62890f7ef66b27e18adf90e4a3c83ccc87c5dfad0c50103808c9bae33890fb79feeb85ab5026d9861098296bab3912fffa0e5d42';

const models = [
    {id:1, name: 'Breast Cancer', description: 'Detect early signs of breast cancer', downloads: 312, model_path: 'model-runner-app.zip', image: 'breast.jpg', author: 'National Cancer Institute'},
    {id:2, name: 'Diabetes', description: 'Check if you have a diabetes', downloads: 428, model_path: 'model-runner-app.zip', image: 'diabetes.jpg', author: 'National Institute of Diabetes and Digestive and Kidney Diseases'},
    {id:3, name: 'Heart Disease', description: 'Analyze risks of heart disease', downloads: 10092, model_path: 'model-runner-app.zip', image: 'heart.jpg', author: 'National Heart, Lung, and Blood Institute'},
    {id:4, name: 'Skin Cancer', description: 'Spot skin cancer (melanoma) early', downloads: 187371, model_path: 'model-runner-app.zip', image: 'skin.jpg', author: 'National Cancer Institute'},
  // add more models here
];

function ModelList() {
    const [activeSubsection, setActiveSubsection] = useState(null);
    const [verificationStatus, setVerificationStatus] = useState(null);
    const [provider, setProvider] = useState(null);
    const [contract, setContract] = useState(null);
    const [modelOutput, setModelOutput] = useState("");
    const [proof, setProof] = useState("");
    const [insurancePurchaseStatus, setInsurancePurchaseStatus] = useState(0);

    const purchaseInsurance = async (id) => {
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(zkDoctorContractAddress, zkDoctorContractAbi, signer);
      
        // Assuming `id`, `amount`, `premium`, `startDate`, `endDate` are provided or determined elsewhere in your code
        try {
          const tx = await contract.claimPolicy(1);
          await tx.wait();
          setInsurancePurchaseStatus('Insurance policy successfully created.');
        } catch (error) {
          console.error("There was an error!", error);
          setInsurancePurchaseStatus('Error purchasing insurance.');
        }
      };
  
    useEffect(() => {
      const initializeProvider = async () => {
          if (window.ethereum) {
              await window.ethereum.request({method: 'eth_requestAccounts'});
              const browserProvider = new BrowserProvider(window.ethereum);
              setProvider(browserProvider);
              setContract(new ethers.Contract(verifierContractAddress, verifierContractAbi, browserProvider));
              console.log('initialized provider');
          }
      };
      initializeProvider();
    }, []);

    const handleDownload = async (id) => {
        setActiveSubsection(id);
        setVerificationStatus(null);
        const model = models.find((m) => m.id === id);

        try{
            const response = await fetch(model.model_path);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href  = url;
            a.download = model.model_path;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (e) {
            console.log(e);
        }

    };

    const handleSubmit = async () => {
        try{
            console.log(modelOutput);
            console.log(proof);
            const result = await contract.verify(JSON.parse(modelOutput), proof);
            setVerificationStatus(result ? 'Proof Verified' : 'Proof Not Verified');
            if (result) {
                await purchaseInsurance(1);
                alert(insurancePurchaseStatus);
            }
        } catch (e) {
            setVerificationStatus('Error occurrred. Proof Not Verified.');
            console.error(e);
        }
    };

    const handleCloseSubsection = () => {
        setActiveSubsection(null);
        setVerificationStatus(null);
    };
  return (
    <div className="model-list">
      <h2>Available Diagnostic Models</h2>
      <table>
        <tbody>
          <tr>
            {models.slice(0, 2).map((model) => (
              <td key={model.id} className="model-cell">
                <div className="model-info">
                  <img src={model.image} alt={model.name} />
                  <h3>{model.name}</h3>
                  <p><strong>Author:</strong> {model.author}</p>
                  <p><strong>Description:</strong> {model.description}</p>
                  <p><strong>Downloads:</strong> {model.downloads}</p>
                  <button onClick={() => handleDownload(model.id)}>Download</button>
                  {activeSubsection === model.id && (
                    <div className="model-subsection">
                        <h4>Instructions for Using the Model</h4>
                            <p>
                            To run this diagnostic model, you'll need to download it and run it locally on your machine.
                            Upload an image to the model, and it will produce an output and proof.
                            Copy those values into the text fields below for verification.
                            </p>
                      <h4>Enter Model Output and Proof</h4>
                      <input type="text" placeholder="Model Output" value={modelOutput} onChange={(e) => setModelOutput(e.target.value)} />
                      <input type="text" placeholder="Proof" value={proof} onChange={(e) => setProof(e.target.value)} />
                      <button onClick={handleSubmit}>Submit</button>
                      <button onClick={handleCloseSubsection}>Cancel</button>
                      {verificationStatus && <div className={verificationStatus !== 'Proof Verified' ? 'verification-status-failed' : 'verification-status'}>{verificationStatus}</div>}
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
          <tr>
            {models.slice(2, 4).map((model) => (
              <td key={model.id} className="model-cell">
                <div className="model-info">
                  <img src={model.image} alt={model.name} />
                  <h3>{model.name}</h3>
                  <p><strong>Author:</strong> {model.author}</p>
                  <p><strong>Description:</strong> {model.description}</p>
                  <p><strong>Downloads:</strong> {model.downloads}</p>
                  <button onClick={() => handleDownload(model.id)}>Download</button>
                  {activeSubsection === model.id && (
                    <div className="model-subsection">
                            <h4>Instructions for Using the Model</h4>
                            <p>
                            To run this diagnostic model, you'll need to download it and run it locally on your machine.
                            Upload an image to the model, and it will produce an output and proof.
                            Copy those values into the text fields below for verification.
                            </p>
                      <h4>Enter Model Output and Proof</h4>
                      <input type="text" placeholder="Model Output" value={modelOutput} onChange={(e) => setModelOutput(e.target.value)} />
                      <input type="text" placeholder="Proof" value={proof} onChange={(e) => setProof(e.target.value)} />
                      <button onClick={handleSubmit}>Submit</button>
                      <button onClick={handleCloseSubsection}>Cancel</button>
                      {verificationStatus && <div className={verificationStatus !== 'Proof Verified' ? 'verification-status-failed' : 'verification-status'}>{verificationStatus}</div>}
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ModelList;