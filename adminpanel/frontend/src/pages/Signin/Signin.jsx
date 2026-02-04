import React from 'react'
import { useState } from 'react'
import { base_uri } from '../../utils/globalv';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'


export default function Signin() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handlesignin=async()=>{
        const user =  {email,password}
        try
        {
         const res= await axios.post(`${base_uri}/auth/signin`,user);
         alert(res.data.message)
         if(res.data.status)
         {
            navigate("/vo",{state:email});
            
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
            <button onClick={handlesignin}>Sign in</button>
            
        </div>
        <div>
            <Link to="/fp">Forgetpass</Link>
        </div>
         <div>
           <Link to="/signup"> dont have an account? sign up</Link>
        </div>


    </div>
  )
}
