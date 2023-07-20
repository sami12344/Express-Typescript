import express, { Request, Response, NextFunction } from 'express'

const app = express()
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      next('There was an error!')
    } else {
      res.write('a')
    }
  }
  res.end()
})
// 404 error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next('Requested URL was not found!')
})

// last error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Handle the error and send an error response
  if (res.headersSent) {
    next('There is a problem')
  } else {
    if (err.message) res.status(500).send(err.message)
    else res.send('There is an error')
  }
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(3000, () => {
  console.log('app listening at port 3000')
})
