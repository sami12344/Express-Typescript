import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

const adminRouter = express.Router()
adminRouter.get('/dashboard', (req,res)=>{
res.send('Dashboard')
})


app.use('/admin',adminRouter)
app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
