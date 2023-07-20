import express from 'express'
import path from 'path'
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) => {

  res.render('pages/home',{
    name:"Welcome"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
