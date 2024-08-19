import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
}, {timestamps: true})

const User = mongoose.model('user', userSchema)
export default User