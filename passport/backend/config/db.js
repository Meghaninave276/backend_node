import mongoose from 'mongoose'
export const conncetdb=()=>{
    mongoose.connect("mongodb://localhost:27017/passport")
}