const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type:String,
            require: true
        },
        password: {
            type: String,
            required: true
        },
        pic: {type: String, 
            required: true, 
            default: "https://www.flaticon.com/free-icons/user"
        },
    }
)

const User = mongoose.model("User", userSchema)

module.exports = User