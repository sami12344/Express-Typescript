import express, { Request, Response, NextFunction } from 'express'
import fs from 'fs'

const app = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  setTimeout(() => {
    try {
      console.log(a) // The variable 'a' is not defined, this will throw an error
      //sometimes data will be undefined in that case. but generally ts will statically will say error
    } catch (err) {
      next(err) // Pass the error to the error handler middleware
    }
  }, 100)
})


// Error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // Handle the error and send an error response
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(3000, () => {
  console.log('app listening at port 3000')
})
