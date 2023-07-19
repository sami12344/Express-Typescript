import express from 'express'
const app = express()
const port = 3000

const router = express.Router({
 caseSensitive:true
})
app.use(router)
router.get('/', (req, res) => {

  res.send('Got a get request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// without expres.json req.body will be undefined. but by using it, we will see {} in console

// Content-Type:application/octet-stream
