import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000


const middleware1 = (req:Request,res:Response,next:NextFunction)=>{
 console.log('I am logging 1');
 
 next()
}

const middleware2 = (req: Request, res: Response, next: NextFunction) => {
  console.log('I am logging 2')

  next()
}
app.use(middleware1)
app.use(middleware2)
app.get('/', (req, res) => {
  
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
