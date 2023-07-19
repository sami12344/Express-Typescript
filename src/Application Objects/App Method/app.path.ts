import express from 'express'

const app = express()
const blog = express()
const blogAdmin = express()

app.use('/blog', blog)
blog.use('/admin', blogAdmin)

console.dir(app.path()) // ''
console.dir(blog.path()) // '/blog'
console.dir(blogAdmin.path()) // '/blog/admin'


app.listen(3000, () => {
  console.log('listening on port 3000')})