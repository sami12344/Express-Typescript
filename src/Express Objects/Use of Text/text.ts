import express from 'express'
const app = express()
const port = 3000
app.use(express.text())
app.post('/', (req, res) => {
  console.log(req.body)

  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// without expres.json req.body will be undefined. but by using it, we will see {} in console

// Content-Type:application/text/plain
//=>

// {
//     "name":"Sami"
// }