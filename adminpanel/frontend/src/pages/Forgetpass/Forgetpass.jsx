import axios from 'axios';
import React, { useState } from 'react'
import { base_uri } from '../../utils/globalv';
import {useNavigate,useLocation} from 'react-router-dom'

export default function Forgetpass() {
  const [email,setEmail]=useState("");
  const navigate=useNavigate();
 
  const handleforgetpass=async()=>{
   
   try
   {
     const res=await axios.post(`${base_uri}/auth/forgetpass`,{email})
  alert(res.data.message );
     if(res.data.status)
     {
      navigate("/vfp",{ state: email })


     }
   }
   catch(err)
   {
    alert(res.message)
   }

  }
  return (
    <div>
      <div>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='email' />
      </div>
      <div>
        <button onClick={handleforgetpass}>verify foregt password</button>
      </div>
    </div>
  )
}
