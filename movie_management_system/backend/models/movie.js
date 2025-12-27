import mongoose, { model } from 'mongoose'

const movies=new mongoose.Schema({
     Movie_Title:{type:String, required:true},
     Description:{type:String, required:true},
     
     Genre:{type:String, required:true},
      Release_Year:{type:Number, required:true},
       Movie_Poster:{type:String, required:true},
      

},{timestamps:true})

export const Movie=mongoose.model("Movie",movies);