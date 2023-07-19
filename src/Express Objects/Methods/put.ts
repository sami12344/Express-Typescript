import express from 'express'
const app = express()
const port = 3000

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
