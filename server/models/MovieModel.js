import mongoose, { Schema } from "mongoose";


const movieSchema = new Schema({
    jEntry: {
        type: String,
        required: true
    },
    stars: {
        type: String,
        required: false
    },
    release_date: {
        type: String,
        required: true
    },
    vote_average: {
        type: String,
        required: true
    },
    backdrop_path: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
      },
    userId: {
        type: String,
        required: false
    }
   
}) 

export default mongoose.model("Movie", movieSchema);