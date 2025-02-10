import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already exist"],
        required: [true, "Email is required"]
    },
    username: {
        type: String,
        required: true,
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric characters and be unique!"
        ]
    },
    image: {
        type: String,

    }
})

const users = models.User || model("User", UserSchema);
export default User;