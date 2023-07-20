import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

const logger = (options: { log: boolean }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
          req.originalUrl
        } - ${req.protocol} - ${req.ip}`
      )
    }

    // The throw statement below will result in an error response sent to the client
    // Remove this line if you don't want the middleware to throw an error.
    throw new Error('This is an error')

    next()
  }
}

app.use(logger({ log: true }))

app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
