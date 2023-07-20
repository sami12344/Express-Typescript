import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.set('title', 'sami')
  console.log(res.get('title'));
  
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
