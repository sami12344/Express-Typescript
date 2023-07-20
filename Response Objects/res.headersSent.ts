import express from 'express'
const app = express()
const port = 3000



app.get('/', (req, res) => {
 console.log(res.headersSent); // => false
 
  res.send('hello world')
   console.log(res.headersSent) // =>true

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
