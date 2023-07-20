import express, { Request, Response, NextFunction } from 'express'
const publicRouter = express.Router()

const log = (req: Request, res: Response, next: NextFunction) => {
  console.log('I am logging something!')
  next()
}

// Extend the Request type to include the 'user' property
declare global {
  namespace Express {
    interface Request {
      user: string
    }
  }
}

publicRouter.param(
  'user',
  (req: Request, res: Response, next: NextFunction, id: string) => {
    req.user = id === '1' ? 'Admin' : 'Anonymous'
    console.log('Middleware is called once!')
    next()
  }
)

publicRouter.get(
  '/:user',
  (req: Request, res: Response, next: NextFunction) => {
    console.log('This also matches')
    next()
  }
)

publicRouter.get('/:user', (req: Request, res: Response) => {
  // Sample logic for the route handler
  const user = req.user // The user value set by the parameter middleware
  res.send(`Hello ${user}`)
})

publicRouter.get('/about', (req: Request, res: Response) => {
  res.send('About')
})

export default publicRouter
