import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const clientIP = req.ip
  console.log(`Client IP: ${clientIP}`)
  res.send(`Your IP address is: ${clientIP}`)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
