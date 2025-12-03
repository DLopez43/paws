import express from "express";
import mongoose from "mongoose";
import { Request, Response, NextFunction, Error} from "express"
import dotenv from "dotenv"
import cors from "cors"
import UserController from "./controllers/UserController.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI as string;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is up");
});

mongoose.connect(
  MONGODB_URI
)
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });


// const UserRouter = express.Router();
// app.use("/", UserRouter);

// // Create a User in the database
// // http://localhost:3000/User
// UserRouter.post("/", UserController.createUser, (req : Request, res : Response)=> { return res.status(200).json(res.locals.newUser)});

// // Get a User from the database
// // http://localhost:3000/User/"name"
// UserRouter.get("/:name", UserController.getUser, (req : Request, res : Response)=> { return res.status(200).json(res.locals.newUser)});

// // Change a users name
// // http://localhost:3000/User/"name"
// UserRouter.patch("/:name", UserController.updateUser, (req : Request, res : Response)=> { return res.status(200).json(res.locals.newUser)});

// // Delete a User from the database
// // http://localhost:3000/User/"name"
// UserRouter.delete("/:name", UserController.deleteUser, (req : Request, res : Response)=> { return res.status(200).json(res.locals.newUser)});

// //attempt to get all users
// UserRouter.get("/",UserController.getAllUsers, (req : Request, res : Response)=> { return res.status(200).json(res.locals.newUser)});
// // Unknown route handler
// app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err: Error, req: Request, res : Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
