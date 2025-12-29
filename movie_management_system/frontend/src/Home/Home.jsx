import { useState } from 'react'
import "./Home.css"

import axios from 'axios'
function Home() {
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [genre,setGenre]=useState("");
  const [year,setYear]=useState("");
  const [files,setFiles]=useState(null);

    const [movies, setMovies] = useState([]);
    const [editingId, setEditingId] = useState(null);
   
 const handlesubmit = async () => {
  try {
    const data = new FormData();

    data.append("Movie_Title", title);
    data.append("Description", description);
    data.append("Genre", genre);
    data.append("Release_Year", year);

    if (files) {
      data.append("Movie_Poster", files);
    }

    const result = await axios.post("http://localhost:4563/movie", data);


    alert("movie added");
    handleget();

  } catch (err) {
    console.log("movie not added", err);
  }
};


  const handleget=async()=>{
  const result = await axios.get("http://localhost:4563/movie");
    setMovies(result.data);
  }

const handledelete = async (id) => {
  try {
    await axios.delete(`http://localhost:4563/movie/${id}`);
    setMovies(movies.filter((m) => m._id !== id));
     handleget();
  } catch (err) {
    console.log("delete failed", err);
  }
};

const handleupdate = async () => {
  try {
    const data = new FormData();

    data.append("Movie_Title", title);
    data.append("Description", description);
    data.append("Genre", genre);
    data.append("Release_Year", year);

    if (files) {
      data.append("Movie_Poster", files);
    }

    await axios.put(`http://localhost:4563/movie/${editingId}`, data);

    alert("movie updated");
    handleget();

    // ✅ RESET FORM
    setEditingId(null);
    setTitle("");
    setDescription("");
    setGenre("");
    setYear("");
    setFiles(null);

  } catch (err) {
    console.log("update failed", err);
  }
};

  return (
    <div className='app-box'>
     
<div className='form-wrapper'>
  
      <div className="form-card">
    <h2>🎬 Movie Management System</h2>

    <input type="text" placeholder="Movie Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
    <input type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)} />
    <input type="text" placeholder="Genre" value={genre} onChange={(e)=>setGenre(e.target.value)} />
    <input type="number" placeholder="Release Year" value={year} onChange={(e)=>setYear(e.target.value)} />
    <input type="file" onChange={(e)=>setFiles(e.target.files[0])} />

    {editingId ? (
      <button className="btn btn-update" onClick={handleupdate}>Update Movie</button>
    ) : (
      <button className="btn btn-add" onClick={handlesubmit}>Add Movie</button>
    )}

    <button className="btn btn-get" onClick={handleget}>Get Movies</button>
  </div>

</div>

      <div className='movie-grid'>
        {
          movies.map((m)=>(
            <div className="movie-card" key={m._id}>
    <img src={`http://localhost:4563${m.Movie_Poster}`}  />
 <div className='movie-content'>
     <h3>{m.Movie_Title}</h3>
    <p>{m.Description}</p>
    <span>{m.Genre}</span>
    <small>{m.Release_Year}</small>
 <div className="card-actions">
            <button className="btn btn-delete" onClick={() => handledelete(m._id)}>Delete</button>
            <button className="btn btn-edit" onClick={() => {
              setEditingId(m._id);
              setTitle(m.Movie_Title);
              setDescription(m.Description);
              setGenre(m.Genre);
              setYear(m.Release_Year);
              setFiles(null);
            }}>Edit</button>
          </div>
 </div>


  </div>

          ))
        }
      </div>


    </div>
  )
}

export default Home;