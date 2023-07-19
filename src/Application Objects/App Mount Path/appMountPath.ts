import express from 'express'
const app = express()
const admin = express()

admin.on('mount', (parent)=>{
 console.log('Admin Mounted');
 console.log(parent);
 
 
})
admin.get('/dashboard', (req, res) => {
 console.log(admin.mountpath);
  console.log(app.mountpath)
  res.send('welcome to admin dashboard')

})
app.get('/', (req, res) => {
  res.send('welcome to application home')
  console.log(app.mountpath);
  
  
})
app.use('/admin', admin)
app.listen(3000, () => {
  console.log('listening on port 3000')
})
