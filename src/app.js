const express = require("express")
require("../src/db/conn")
const menranking = require("../src/models/mens")
const router = require("../src/routers/men")
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(router)
app.listen(port, () => {
    console.log(`your app is running on port ${port}`)
})
module.exports = router