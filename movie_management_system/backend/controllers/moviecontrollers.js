
import { Movie } from "../models/movie.js";
import fs from 'fs'
import { __dirname } from "../server.js";
import path from 'path'
import { uploadpath } from "../server.js";

// export const addmovie=async(req,res)=>{
//     try
//     {
//       const {Movie_Title,Description,Genre,Release_Year}=req.body
//       const result =  await Movie.create({Movie_Title,Description,Genre,Release_Year,Movie_Poster:`/uploads/${req.file.filename}`});
//         res.json({message:"movie added",result});
//     }
//     catch(e)
//     {
//          res.status(500).json({message:"movie not added",e});

//     }


// }
export const addmovie = async (req, res) => {
  try {
    const { Movie_Title, Description, Genre, Release_Year } = req.body;

    const result = await Movie.create({
      Movie_Title,
      Description,
      Genre,
      Release_Year,
      Movie_Poster: req.file ? `/uploads/${req.file.filename}` : null
    });

    res.status(201).json({ message: "movie added", result });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "movie not added", error: err.message });
  }
};


// export const addmovie = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "Movie poster is required" });
//     }

//     const { title, description, genre, year } = req.body;

//     const result = await Movie.create({
//       Movie_Title: title,
//       Description: description,
//       Genre: genre,
//       Release_Year: year,
//       Movie_Poster: `/uploads/${req.file.filename}`,
//     });

//     res.status(201).json({ message: "movie added", result });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ message: "movie not added", error: e.message });
//   }
// };

// export const addmovie = async (req, res) => {
//   try {
//     const { Movie_Title, Description, Genre, Release_Year } = req.body;

//     const result = await Movie.create({
//       Movie_Title,
//       Description,
//       Genre,
//       Release_Year,
//       Movie_Poster: req.file ? `/uploads/${req.file.filename}` : null
//     });

//     res.status(201).json({ message: "movie added", result });

//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ message: "movie not added", error: e.message });
//   }
// };

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
export const deletemovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    if (movie.Movie_Poster) {
      const filename = path.basename(movie.Movie_Poster); // ✅ SAFE
      const filePath = path.join(uploadpath, filename);

      console.log("Deleting file:", filePath);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await Movie.findByIdAndDelete(req.params.id);

    res.json({ message: "movie deleted" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "movie not deleted", err });
  }
};

export const updatemovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    if (req.file && movie.Movie_Poster) {
      const oldFilename = path.basename(movie.Movie_Poster);
      const oldFilePath = path.join(uploadpath, oldFilename);

      console.log("Deleting old image:", oldFilePath);

      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }

      movie.Movie_Poster = `/uploads/${req.file.filename}`;
    }

    movie.Movie_Title = req.body.Movie_Title;
    movie.Description = req.body.Description;
    movie.Genre = req.body.Genre;
    movie.Release_Year = req.body.Release_Year;

    await movie.save();

    res.json({ message: "movie updated", movie });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "movie not updated", err });
  }
};


