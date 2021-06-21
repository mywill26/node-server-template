const express = require('express')
const app = express()

app.use(express.static('/export/App/dist'))

app.listen(9051, () => {
    console.log('server running !!!')
})
