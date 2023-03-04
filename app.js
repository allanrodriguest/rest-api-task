const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('We are on home')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
