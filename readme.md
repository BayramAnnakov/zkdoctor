zkDoctor is revolutionizing the healthcare and insurance landscape by integrating cutting-edge technologies like blockchain and machine learning to prioritize user privacy and provide personalized services.

1. Health Diagnostics Models Website: Our platform offers an extensive list of health diagnostic models tailored to meet a wide range of medical needs. Users can assess their health status in real-time and then seamlessly purchase an insurance policy that matches their health profile.
2. Client-Side Model Runner: With zkDoctor, you don't have to worry about exposing sensitive medical data. Our client-side model runner allows users to get their diagnostics and generate zero-knowledge proofs. This means your data stays on your device and is never exposed, ensuring complete privacy.
3. Blockchain-Powered Smart Contracts: We leverage Ethereum smart contracts for on-chain proof verification and tracing of insurance policies. Once a zero-knowledge proof is verified on-chain, the user can proceed to purchase an insurance policy, knowing that their private health information remains confidential.
4. MetaMask Snap Integration: Our custom MetaMask snap offers insurance policy transaction insights. We've also implemented a recurring cron job that keeps you updated on the status of your policy, reminding you when it's time to renew.

By bringing together blockchain's transparency and the privacy features of zero-knowledge proofs, zkDoctor is setting new standards in the healthcare industry, making it safer, more private, and more efficient.

This project uses:
1) Smart Contracts on Multiple EVMs: I used Solidity to write smart contracts that were deployed across multiple EVM-compatible blockchains, including Base, Gnosis, Polygon zkEVM, and Scroll. This multi-chain approach broadens the reach and utility of our service.
2) React Frontend: User interface is built using React, giving the speed and scalability to handle complex features like real-time diagnostics and seamless insurance policy purchases.
3) ezkl for Zero-Knowledge Proofs: For generating zero-knowledge proofs related to deep learning model inferences, I used the ezkl library. This ensures that user data stays private and only the necessary information is shared.
4) ElectronJS for Client-side Model Runner: The client-side diagnostic model runs in an ElectronJS application. This allows users to get real-time health assessments while ensuring their data remains on their device, never leaving their system.
5) Metamask Snap: I developed a custom MetaMask Snap that provides users with additional transaction information and also includes a cron job to regularly check the status of the user's insurance policy, offering reminders when it's time for renewal.
6) theGraph for On-Chain Data: I used theGraph to create a subgraph that fetches insurance policies from the blockchain, allowing us to easily query and display this data within the application.

Integration and Workflow:
The React frontend interacts with the smart contracts via Alchemy SDK, facilitating everything from diagnostics to insurance policy purchases.
The ElectronJS app integrates seamlessly with the React frontend, allowing for client-side model running and zero-knowledge proof generation using ezkl.

Notable Hacks:
1) One of the most challenging parts was integrating ezkl with deep learning models to generate zero-knowledge proofs. This involved a bit of fine-tuning to ensure the proofs were both secure and efficient.
2) Another noteworthy hack was setting up the cron job within the MetaMask Snap. This allows to provide real-time, automated updates about insurance policy status, something that isn't inherently supported in MetaMask by default.