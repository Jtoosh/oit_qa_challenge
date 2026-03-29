const express = require('express')
const app = express()
const port = 3000

const api_URL = "https://69c8836f68edf52c954dd039.mockapi.io/books/v1"

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})