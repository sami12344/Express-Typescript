import express from 'express';
import adminRouter from './adminRouter';
import publicRouter from './publicRouter';

const app = express();




app.use('/admin',adminRouter)

app.use('/',publicRouter)
app.listen(3000, () => {
console.log('listening on port 3000');
})
