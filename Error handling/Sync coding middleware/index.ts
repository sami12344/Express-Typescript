import express, { Request, Response, NextFunction } from 'express'
import fs from 'fs'

// Augment the Express Request interface to include the customData property
declare global {
  namespace Express {
    interface Request {
      customData: string // Change 'string' to the actual type of your data
    }
  }
}

const app = express()

app.get('/', [
  (req: Request, res: Response, next: NextFunction): void => {
    fs.readFile('/file-doesnt-exist', 'utf-8', (err, data) => {
      if (err) {
        next(err)
      } else {
        req.customData = data // Save the data to the request object
        next()
      }
    })
  },
  (req: Request, res: Response, next: NextFunction) => {
    console.log(req.customData) // Access the data from the request object
    try {
      const parsedData = JSON.parse(req.customData)
      console.log(parsedData.property)
    } catch (err) {
      next(err)
    }
  },
])

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // Handle the error and send an error response
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(3000, () => {
  console.log('app listening at port 3000')
})
