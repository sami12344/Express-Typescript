import express,{ Application } from "express";

const app:Application = express();
app.all('/', (req, res)=>{
                          
    res.send('welcome to application home');})
    
app.listen(3000,()=>{
    console.log('listening on port 3000');
});
