
const port = process.env.PORT || 8080;
const server = app.listen(port, () => { .. })

const express = require('express')
const app = express()
//const port = 3000

// serve the public directory as a static content here
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})