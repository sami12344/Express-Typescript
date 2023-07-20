import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

const middleware1 = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl}- ${req.protocol} - ${req.ip}`)

  next()
}


app.use(middleware1)

app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
