import mongoose from "mongoose"
 const userSchema = new mongoose.Schema ({
    name: String,
    email: {
      type: String,
      unique: true,
    },
    picture: String,
},
    {timestamps:true}
)
export const user  = mongoose.model("User",userSchema)