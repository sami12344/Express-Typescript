import express from 'express'
const app = express()
const port = 3000

app.use(
  express.static(`${__dirname}/public`, {
    index: 'home.html',
  })
)
app.get('/', (req, res) => {
  res.send('Hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
