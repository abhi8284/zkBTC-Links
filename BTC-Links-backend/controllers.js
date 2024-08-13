const pinataSdk = require('@pinata/sdk') // pinata for storing 
require('dotenv').config({ path: __dirname + '/.env' })

const pinata = new pinataSdk(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY)

async function test(req, res, next) {
  console.log(process.env.PINATA_API_KEY)
  console.log(await pinata.testAuthentication())
  res.send('Hi Kamal, Lets Build Bitcoin-Links')
  next()
}

async function publishToIPFS(iframe) {
  try {
    const ipfsFile = await pinata.pinJSONToIPFS({ iframe })
    console.log(ipfsFile.IpfsHash)
    return ipfsFile.IpfsHash
  } catch (error) {
    console.log(error)
  }
}

const makeid = () => {
  return Math.floor(Math.random() * 100000000)
}

async function storeToIpfsviapinata(req, res, next) {
  const iframe = req.body
  try {
    const ipfsFile = await pinata.pinJSONToIPFS(iframe)
    console.log(ipfsFile.IpfsHash)
    res.send(ipfsFile.IpfsHash)
  } catch (error) {
    console.log(error)
    res.send('Error')
  }
  next()
}

async function generateBTCTransferBTClink(req, res, next) {
  // 1) Generate HTML for Transfer BTC-Link
  const id = makeid() // Da ne bi bagovalo sa dva ista tvita koji linkuju ka ovom blinku
  const iframe = {
    html: `
    <h1>Send btc</h1>
    <p>Send 1 btc to the following address:</p>
    <input placeholder="Type the address..." value="0x679a9aa509A85EeA7912D76d85b0b9195972B211" type="text" id="input${id}">
    <button id="dugme${id}">Send btc</button>`,
    js: `
      async function showAlert() {
          const recipient = document.getElementById("input${id}").value;
          console.log(window.ethereum);
          if (typeof window.ethereum !== 'undefined') {
              try {
                  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                  const publicKey = accounts[0];
                  // Specify the amount of BTC to send (in sats)
                  const amount = "0x" + (1e18).toString(16)
                  // Transaction parameters
                  const transactionParameters = {
                      to: recipient,
                      from: publicKey,
                      value: amount,
                  };
                  console.log(transactionParameters)
                  // Send the transaction
                  const txHash = await ethereum.request({
                      method: 'eth_sendTransaction',
                      params: [transactionParameters],
                  });
                  alert(\`Transaction Sent! Hash: \${txHash}\`);
                  // Check the transaction status
                  const checkTransactionStatus = async (hash) => {
                      const receipt = await ethereum.request({
                          method: 'eth_getTransactionReceipt',
                          params: [hash],
                      });
                      if (receipt && receipt.blockNumber) {
                          alert('Transaction Completed!');
                      } else {
                          setTimeout(() => checkTransactionStatus(hash), 1000);
                      }
                  };
                  checkTransactionStatus(txHash);
              } catch (error) {
                  alert(\`Error: \${error.message}\`);
              }
          } else {
              alert('MetaMask is not installed');
          }
      }
      document.getElementById('dugme${id}').addEventListener('click', showAlert);
      `,
  }
  // 2) Store the HTML on IPFS
  let cid
  try {
    cid = await publishToIPFS(iframe)
    console.log(`Transfer BTC-Link published to IPFS with CID: ${cid}`)
  } catch (error) {
    console.log(error)
  }

  // 3) Send the IPFS link to the user
  const ipfsLink = `https://gateway.ipfs.io/ipfs/${cid}`
  res.send('Transfer BTC-Link generated. Check it out at: ' + ipfsLink)

  next()
}

module.exports = { test, generateBTCTransferBTClink, storeToIpfsviapinata }
