import mongoose, { Schema } from 'mongoose'

const listSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        required: true 
    },
    mobile: {
        type: Number,
        required: true ,
        unique: true 
    },
    email: {
        type: String,
        required: true ,
        unique: true
    },
    message: {
        type: String,
        required: true 
    }
}, {timestamps: true})

const List = mongoose.model('list', listSchema)

export default List