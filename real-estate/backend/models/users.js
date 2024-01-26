import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: "String",
        required: true,
        default: "registered"
    },
    createdAt: Date,
    updatedAt: Date,
});
userSchema.pre("save", function(next) {
    var user = this;
    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    })
});

userSchema.methods.validatePassword = async function (data){
    return bcrypt.compare(data, this.password);
}

export default mongoose.model("User", userSchema);