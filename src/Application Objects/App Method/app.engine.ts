import { log } from 'console'
import express from 'express'
import path from 'path'
const app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))
app.route('/about/mission').get((req,res)=>{
 
 res.render('pages/about')
})
app.listen(3000,()=>{
 log('Server listening at 3000')
})