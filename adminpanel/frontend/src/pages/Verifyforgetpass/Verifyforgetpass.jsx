import axios from 'axios';
import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { base_uri } from '../../utils/globalv';
import {useNavigate,useLocation} from 'react-router-dom'
export default function Verifyforgetpass() {
const [otp, setOtp] = useState("");
const [pass, setPass] = useState("");

  const location=useLocation();
  const email=location.state;
  

  const navigate=useNavigate();
  const handlevfp=async()=>{
    try
    {
      const res = await axios.post(`${base_uri}/auth/changeforgetpass`,{ email,
  password: pass,
  otp})
      alert(res.data.message);
      
      if(res.data.status)
      {
        navigate("/");
      }

    }
    catch(err)
    {

    }

  }
  return (
    <div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        inputType="number"
      />

      <input
        type="password"
        placeholder="New Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handlevfp}>Change Password</button>
    </div>
  )
}
