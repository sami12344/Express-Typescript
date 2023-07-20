import { log } from 'console'
import express, { Application, Request, Response, NextFunction } from 'express'

// Create a custom interface for the user details
interface UserDetails {
  userId: string
  name: string
}

const app: Application = express()

// Extend the Request interface to include the custom 'userDetails' property
declare global {
  namespace Express {
    interface Request {
      userDetails: UserDetails
    }
  }
}

app.param(
  'id',
  (req: Request, res: Response, next: NextFunction, id: string) => {
    const user: UserDetails = {
      userId: id,
      name: 'Bangladesh',
    }
    req.userDetails = user
    next()
  }
)

app.get('/user/:id', (req: Request, res: Response) => {
 log(req.userDetails)
  res.send('welcome to application home')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
