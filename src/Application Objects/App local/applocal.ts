import { log } from 'console'
import express from 'express'
import handle from './handle'
const app = express()

app.locals.title = 'My App'

app.get('/', handle)
app.listen(3000, () => {
  console.log('listening on port 3000')
})
