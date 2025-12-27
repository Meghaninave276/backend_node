
import { Movie } from "../models/movie.js";

export const addmovie=async(req,res)=>{
    try
    {
      const {Movie_Title,Description,Genre,Release_Year}=req.body
      const result =  await Movie.create({Movie_Title,Description,Genre,Release_Year,Movie_Poster:"/uploads"+req.file.filename});
        res.json({message:"movie added",result});
    }
    catch(e)
    {
         res.status(500).json({message:"movie not added",e});

    }


}

export const getmovie=async(req,res)=>{
 try
 {
   const movies =  await Movie.find();
  res.json(movies);
 }

 catch(err)
 {
   res.status(500).json({message:"movie not found",e});

 }
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