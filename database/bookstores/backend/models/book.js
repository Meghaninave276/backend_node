import mongoose from 'mongoose'

const bookschema= new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    publishyear:{type:Number, required:true},
    category:{type:String, required:true},

    
},
{timestamps:true}
)
// models/Book.js
export const Book = mongoose.model("Book", bookschema);
