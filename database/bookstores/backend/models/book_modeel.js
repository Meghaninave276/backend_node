import mongoose from 'mongoose'

const bookschema= new mongoose.Schema({
    title:{type:String, require:true},
    author:{type:String, require:true},
    publishyear:{type:Number, require:true},
    category:{type:String, require:true},

    
},
{timestamps:true}
)
export const book_modeel = mongoose.model("Book",bookschema);