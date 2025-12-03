import User from "../models/UserModel.ts"
import { Request,Response,NextFunction,Error } from "express"

const UserController = {

createUser :async (req: Request, res : Response, next: NextFunction) => {
    try{
        const newUser = await User.create(req.body);
        res.locals.newUser = newUser; 
        return next()

    } catch(err: Error){
    return next(
        {
          log:`Something went wrong adding a new user`,
          status: 500,
          message:{ error : `An Issue Occured Creating Your Account.`}
          
        }
       )
    }
 
}   
}

export default UserController;