import User from "../models/UserModel.ts";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";


const UserController = {
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password } = req.body;

      const userCheck = await User.findOne({ username });

      if (userCheck) {
        alert("Username cannot be created.");
        return res.status(400).json({ message: "Username cannot be created." });
      }

      const emailCheck = await User.findOne({ email });
      if (emailCheck) {
        return res.status(400).json({ message: "Email already registered." });
      }

      const passwordHashed = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        email,
        password: passwordHashed,
      });

      res.locals.newUser = newUser;
      return next();
    } catch (error: unknown) {
      return next({
        log: `Something went wrong adding a new user`,
        status: 500,
        message: { error: `An Issue Occured Creating Your Account.` },
      });
    }
  },

  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsers = await User.find();

      res.locals.allUsers = findAllUsers;

      return next();
    } catch (error: unknown) {
      return next({
        log: `Something went wrong finding User`,
        status: 500,
        message: { error: `Sorry, we cannot find those User.` },
      });
    }
  },
};

export default UserController;
