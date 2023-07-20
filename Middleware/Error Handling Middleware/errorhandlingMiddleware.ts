import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${
      req.originalUrl
    }- ${req.protocol} - ${req.ip}`
  )
  throw new Error('This is an error')

  next()
}

app.use(logger)

app.get('/', (req, res) => {
  res.send('Hi')
})
const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handle the error here, for example:
  console.error(err.message);
  res.status(500).send('Internal Server Error');
};

app.use(errorHandlerMiddleware);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
