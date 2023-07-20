import { log } from "console"
import { Request, Response } from "express"

const handle = (req:Request,res:Response)=>{
 log(req.app.locals.title)
 res.send('this is home page')
}

export default handle