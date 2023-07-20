import { Router, Request, Response, NextFunction } from 'express'

const publicRouter = Router()

publicRouter.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Logging')
  next()
})

export default publicRouter
