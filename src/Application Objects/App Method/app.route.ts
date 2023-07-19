import { log } from 'console'
import express from 'express'
const app = express()

app
  .route('/events')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
  })
  .get(function (req, res, next) {
    res.json({})
  })
  .post(function (req, res, next) {
    // maybe add a new event...
  })

  app.listen(3000,()=>{
   log('server listening at 3000')
  })