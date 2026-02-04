import React from 'react'
import { useState } from 'react'
import { base_uri } from '../../utils/globalv';
import axios from 'axios';

import {Link,useNavigate} from 'react-router-dom'

export default function Signup() {
     const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handlesignup=async()=>{
        const user =  {email,password}
        try
        {
         const res= await axios.post(`${base_uri}/auth/signup`,user);
           alert(res.data.message)
         if(res.data.status)
         {
          navigate("/");

         }
            
        }
        catch(err)
        {
            alert(res.message);


        }

    }
  return (
   

    <div>
   
        <div>
            <input type="text"  placeholder='email' onChange={(e)=>setEmail(e.target.value)} value={email} />

        </div>
     <div>
            <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            
        </div>
         <div>
            <button onClick={handlesignup}>Sign up</button>
            
        </div>
        
      <Link to="/">Already have an account? Sign in</Link>

    </div>
  )
}
