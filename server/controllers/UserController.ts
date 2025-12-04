import User from "../models/UserModel.ts"
import { Request,Response,NextFunction } from "express"

const UserController = {

createUser :async (req: Request, res : Response, next: NextFunction) => {
    try{
      console.log(req.body)
        const newUser = await User.create(req.body);
        res.locals.newUser = newUser; 
        return next()

    } catch(error: unknown){
    return next(
        {
          log:`Something went wrong adding a new user`,
          status: 500,
          message:{ error : `An Issue Occured Creating Your Account.`}
          
        }
       )
    }
 
},

getAllUsers: async(req : Request, res: Response, next : NextFunction) => {
    try{
      const findAllUsers = await User.find();

     res.locals.allUsers = findAllUsers;
      
      return next()
      
    }catch(error : unknown){
      return next(
        {
          log:`Something went wrong finding User`,
          status: 500,
          message:{ error :`Sorry, we cannot find those User.`}
          
        }
      )
    }
  },
}

export default UserController;