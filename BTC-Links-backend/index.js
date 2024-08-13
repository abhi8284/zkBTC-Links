// start the server using express
const express = require('express')
const cors = require('cors')
const controllers = require('./controllers.js') // import all the controllers to be used by the server
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.get('/', controllers.test)
app.post('/generateEthTransferBlink', controllers.generateBTCTransferBTClink)
app.post('/generateBRC20TransferBlink', controllers.generateBRC20TransferBTClink)
app.post('/storeToIpfs', controllers.storeToIpfsviapinata)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
