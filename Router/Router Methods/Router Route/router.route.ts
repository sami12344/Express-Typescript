import { Router, Request, Response, NextFunction } from 'express'

const publicRouter = Router()

publicRouter
  .route('/user')
  .all((req: Request, res: Response, next: NextFunction) => {
    console.log('I am logging something')
    next()
  })
  .get((req: Request, res: Response) => {
    res.send('GET')
  })
  .post((req: Request, res: Response) => {
    res.send('POST')
  })
  .put((req: Request, res: Response) => {
    res.send('PUT')
  })
  .delete((req: Request, res: Response) => {
    res.send('DELETE')
  })

export default publicRouter
