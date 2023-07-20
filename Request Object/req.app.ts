import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log(req.secure) // if http it will return false if it is https it will return true

  res.send('Hello world')
})

app.listen(3000, () => {
  console.log('Server running at 3000')
})

