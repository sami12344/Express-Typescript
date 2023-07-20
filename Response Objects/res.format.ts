import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
 res.format({
  "text/plain":()=>{
   res.send('Hi it is plain text')
  },
  "text/html":()=>{
   res.render('pages/home',{
    name:'Bangladesh'
   },
   )
  },
  "application/json":()=>{
   res.json({
    message:"Hi it is json"
   })
  },
  default: ()=>{
   res.sendStatus(406)
  }
 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
