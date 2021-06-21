const express = require('express')
const app = express()

app.use(express.static('/opt/nodes/node-server-template/dist'))

app.listen(9051, () => {
    console.log('server running !!!')
})
