import express from 'express'
const app = express()

const adminRoute = express.Router()
adminRoute.get('/dashboard', (req, res) => {
  console.log(req.originalUrl)
  res.send('We are in Admin Dashboard')
})
app.use('/admin', adminRoute)

app.get('/user/:id', (req, res) => {
  console.log(req.originalUrl)
  console.log(req.method);
  
  res.send('Hello world')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
