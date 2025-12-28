import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [genre,setGenre]=useState("");
  const [year,setYear]=useState("");
  const [files,setFiles]=useState(null);
  const [image,setImage]=useState("https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg");
  const [titles,setTitles]=useState("");
   const [descriptions,setDescriptions]=useState("");
    const [genres,setGenres]=useState("");
    const [years,setYears]=useState("");
    const [movies, setMovies] = useState([]);
   
  const handlesubmit=async()=>{
   try
   {
     const data=new FormData();
    data.append("title",title);
    data.append("description",description);
    data.append("genre",genre);
    data.append("year",year);
    data.append("Movie_Poster",files);

  const result = await axios.post("http://localhost:4563/movie",data);
  alert("movie added");
  console.log(result.data);
 setImage("http://localhost:4563" + result.data.result.Movie_Poster);
 setTitles(result.data.result.Movie_Title || title);
 setDescriptions(result.data.result.Description || description);
 setGenres(result.data.result.Genre || genre);
 setYears(result.data.result.Release_Year || year);

  


   }
   catch(err)
   {
    console.log("movie not added",err);

   }
  }

  const handleget=async()=>{
  const result = await axios.get("http://localhost:4563/movie");
    setMovies(result.data);
  }

  return (
    <>
     

      <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>
      <div>
        <input type="text" value={genre} onChange={(e)=>setGenre(e.target.value)}/>
      </div>
      <div>
        <input type="number" value={year} onChange={(e)=>setYear(e.target.value)} />
      </div>
      <div>
        <input type="file"  onChange={(e)=>setFiles(e.target.files[0])}/>
      </div>
      <div>
       <button onClick={handlesubmit}>Add Movie</button>
       <button onClick={handleget}>get</button>
      </div>
      <div>
         <img src={image}  alt="" />
      <h1>{titles}</h1>
      <p>{descriptions}</p>
      <h3>{genres}</h3>
      <h4>{years}</h4>

      </div>

      <div>
        {
          movies.map((m)=>(
            <div key={m._id}>
    <img src={`http://localhost:4563${m.Movie_Poster}`} width="150" />
    <h3>{m.Movie_Title}</h3>
    <p>{m.Description}</p>
    <span>{m.Genre}</span>
    <small>{m.Release_Year}</small>
  </div>

          ))
        }
      </div>


    </>
  )
}

export default App
