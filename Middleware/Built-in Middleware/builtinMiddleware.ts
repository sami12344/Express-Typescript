import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
