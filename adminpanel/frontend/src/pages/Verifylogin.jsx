import React, { useState } from 'react'
import { useEffect } from 'react';
import Home from './Home/Home';
import Signin from './Signin/Signin';
import { base_uri } from '../utils/globalv.js';
import axios from 'axios';

export default function Verifylogin({children}) {
    const [islogin,setIslogin]=useState(false)
    useEffect(()=>{
        Checklogin();
    },[])
     const Checklogin=async()=>{
          console.log("-----------------------");
    
          try
          {
             const res = await axios.get(`${base_uri}/admin/getcurrentuser`,{withCredentials:true})
             if(res.data.user.role=="admin")
             {
                console.log(res.data.user);
                setIslogin(true)
              
    
             }
             else
             {
                 setIslogin(false)
             }
    
          }
          catch(err)
          {
    
             setIslogin(false)
          }
       }
  return (
   islogin?children:<Signin/>
  )
}

