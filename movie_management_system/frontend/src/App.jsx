import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [genre,setGenre]=useState("");
  const [year,setYear]=useState("");
  const [file,setFile]=useState();
  

  return (
    <>
      
      <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <input type="text" value={description} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <input type="text" value={genre} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
        <input type="number" value={year} onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div>
        <input type="file" value={file} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div>
       <button>search</button>
      </div>
    </>
  )
}

export default App
