import {Schema} from 'mongoose';


const bookSchema = new Schema({
    title:  {
        type: String,
        required: true
    },
    pages: Number,
    author: {
        type: String,
        default: 'Unknown'
    },
    comments: String,
    rate: {
        type: Number,
        default: 0,
        required: true
    }
})

export {bookSchema}