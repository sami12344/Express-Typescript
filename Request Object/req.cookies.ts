import cookieParser from 'cookie-parser';
import express from 'express'

var app = express()
app.use(cookieParser())

app.get('/',(req,res)=>{
  console.log(req.cookies) // => { sami: 'islam' }
  res.send('Hello world')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
