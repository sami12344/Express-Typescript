import express from 'express'
import handler from './handler'
const app = express()

app.get('/', handler)

app.listen(3000, () => {
  console.log('Server running at 3000')
})

