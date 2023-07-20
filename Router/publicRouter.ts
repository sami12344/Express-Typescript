import express, { Request, Response, NextFunction } from 'express'
const publicRouter = express.Router()

const log = (req: Request, res: Response, next: NextFunction) => {
  console.log('I am logging something!')
  next()
}

publicRouter.all('*',log)
publicRouter.get('/', (req: Request, res: Response) => {
  res.send('Home')
})

publicRouter.get('/about', (req: Request, res: Response) => {
  res.send('About')
})

export default publicRouter
