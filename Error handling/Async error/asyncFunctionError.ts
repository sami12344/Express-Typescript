import express, { Request, Response, NextFunction } from 'express'
import fs from 'fs'

const app = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass the error to the error handler middleware
    } else {
      // Process the data if read successfully
      res.send(data)
    }
  })
})

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // Handle the error and send an error response
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(3000, () => {
  console.log('app listening at port 3000')
})
