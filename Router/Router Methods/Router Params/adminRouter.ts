import express from 'express'

const adminRouter = express.Router()

adminRouter.get('/', (req, res) => {
  res.send('Dashboard')
})

adminRouter.get('/login', (req, res) => {
 res.send('login')
})

export default adminRouter