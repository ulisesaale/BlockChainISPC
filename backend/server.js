const Web3 = require('web3');
const express = require('express');
const app = express();

// ABI del contrato generado por Truffle
const contractABI = [    
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "int256",
                "name": "newValue",
                "type": "int256"
            }
        ],
        "name": "PotentiometerValueChanged",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "potentiometerValue",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "int256",
                "name": "_value",
                "type": "int256"
            }
        ],
        "name": "updateValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

// Dirección del contrato desplegado en la blockchain
const contractAddress = '0x45636dd39fbf761a8fcff74a1a7917fe0fcdd2fe';

// Inicializar Web3 usando Infura
const web3 = new Web3('http://127.0.0.1:8545');

// Crear una instancia del contrato
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Cuenta de Metamask desde la cual interactuarás con el contrato
const account = '0x45636dD39FbF761a8fCFf74a1a7917fe0fcdd2Fe';

// Endpoint para recibir el valor del ESP32 y actualizar el contrato
app.get('/updatePotentiometerValue', async (req, res) => {
  const { value } = req.query;

  try {
    // Llamar al método del contrato que actualiza el valor
    const receipt = await contract.methods.updateValue(value).send({ from: account });
    res.send(`Transaction hash: ${receipt.transactionHash}`);
  } catch (error) {
    res.send(`Error: ${error.message}`);
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Backend listening on port 3000');
});
