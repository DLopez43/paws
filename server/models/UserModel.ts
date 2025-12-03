import mongoose from "mongoose";
// A "Username" that is a string
// A "Password" that is a string
// A "Email" that is a string
// All of these should be required.
// Create your schema here

const userSchema = new mongoose.Schema(
    {
      username : { type : String, required : true},
      password : { type : String, required : true},
      email : { type : String, required : true},
    }
)

// Export your model here
// The collection name should be 'student'
export default mongoose.model('user', userSchema)