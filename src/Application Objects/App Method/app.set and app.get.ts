import express, { Application } from 'express'

const app: Application = express()

app.get('title')
// => undefined

app.set('title', 'My Site')
app.get('title')
// => "My Site"d
app.all('/about', (req, res) => {
  res.send('welcome to application home')
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
