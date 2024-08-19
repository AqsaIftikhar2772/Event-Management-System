import mongoose, { Schema } from "mongoose";

const citySchema = new Schema({
    city: {
        type: String,
        required: true
    },
})

export const City = mongoose.model('city', citySchema)

const plusSchema = new Schema({
    plusPoint: {
        type: String,
        required: true
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'city'
    }
})

export const Plus = mongoose.model('plusPoint', plusSchema)