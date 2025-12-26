import { title } from "process";
import { Movie } from "../models/movie.js";

export const addmovie=async(req,res)=>{
    try
    {
        const newmovie= new Movie({
              Movie_Title:"Inception",
     Description:"A skilled thief enters people's dreams to steal secrets and plant ideas.",
     Genre:"Science Fiction",
    
      Release_Year:2010,
       Movie_Poster:"https://example.com/inception-poster.jpg"

        });
        const result = await newmovie.save()
        res.json({message:"movie added",result});
    }
    catch(e)
    {
         res.status(500).json({message:"movie not added",e});

    }


}

export const getmovie=async(req,res)=>{
  const movies =  await Movie.find();
  res.json(movies);

}

export const getmoviebyId=async(req,res)=>{
 try
 {
   const movie =  await Movie.findById(req.params.id);
  res.json({message:"movie added",movie});

 }
 catch(err)
 {
  res.json({message:"movie not found",err});

 }

}

export const searchMovie = async (req, res) => {
  try

  {
    const { title } = req.query;

  const movies = await Movie.find({
    Movie_Title: { $regex: title, $options: "i" }
  });

  res.json(movies);

  }
  catch(err)
  {

    res.json({message:"movie not found",err});
  }
};