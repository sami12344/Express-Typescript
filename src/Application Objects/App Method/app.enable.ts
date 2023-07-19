import express, { Application } from 'express'

const app: Application = express()

app.enable('case sensetive routing')
app.disable('case sensetive routing')
app.all('/about', (req, res) => {
  res.send('welcome to application home')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
