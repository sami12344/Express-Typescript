import express from 'express'
const app = express()
const port = 3000
app.use(express.raw())
app.post('/', (req, res) => {
  console.log(req.body)
  console.log(req.body.toString())
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// without expres.json req.body will be undefined. but by using it, we will see {} in console

// Content-Type:application/octet-stream