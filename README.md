# TicektSales DApp
## Description
TicketSales is a decentralized application (DApp) built for ticket selling projects. It leverages the Hardhat development environment to simulate a blockchain and uses Next.js for the frontend.

## Video Demo
[Video Tutorial on Loom](https://www.loom.com/share/63b011ebff67456d833dd0485307b9dd)

## Prerequisites
-Node.js (v14 or higher) - [Download Node.js](https://nodejs.org/en)

-MetaMask extension installed - [Download MetaMask](https://metamask.io/download/)

## Steps to Start the Project
1. Clone the project repository:

```
git clone <repository-url>
```
2. Navigate into the project directory:

```
cd <folder>
```
3. Install the dependencies:
```
npm install
```
4. Open three terminals:

#### Terminal 1: 
Run the Next.js development server:
```
npm run dev
```
This will start the frontend on http://localhost:3000/.

#### Terminal 2: 
Start the Hardhat node to simulate a blockchain:
```
npx hardhat node
```
Note the RPC URL which is http://127.0.0.1:8545/.

#### Terminal 3: 
Compile and deploy the smart contracts:
```
npx hardhat compile
npx hardhat ignition deploy ./ignition/modules/TicketSales.js --network localhost
```
5. Configure MetaMask:

* Open MetaMask and add a new network with the following details:
  - Network Name: My local host (or any name you prefer)
  - RPC URL: `http://127.0.0.1:8545/`
  - Chain ID: `31337`
  - Currency Symbol: ETH
  - Block Explorer URL: (Leave it unfilled)
    
* Add a new account in MetaMask:
  - Click on the accounts dropdown at the top-center.
  - Select "Import Account" and paste the private key of any account generated by `npx hardhat node` (e.g., `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`).

6. Connect to the DApp:

  - Visit http://localhost:3000/.
  - If prompted, install MetaMask.
  - Click on the "Connect Account via MetaMask" button.
  - Select the newly added account (ensure the public key matches).

Now you can donate money to the projects using your account.

