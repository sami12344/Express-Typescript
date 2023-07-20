import {Request,Response} from 'express';
const handler = (req:Request, res:Response)=>{
 console.log(req.app.get('view engine'));
 res.send("Hello Wordl")
 
}

export default handler