import axios from 'axios';
import {useState} from 'react'
import OtpInput from 'react-otp-input';
import { base_uri } from '../../utils/globalv';
import {useLocation,useNavigate} from 'react-router-dom'

export default function Verifyotp() {
  const navigate=useNavigate();
  const {state}=useLocation();
  const [otp, setOtp] = useState('');
  const handleverifyotp=async()=>{
  try
  {
    const res=await axios.post(`${base_uri}/auth/verifyotp`,{email:state,otp:Number(otp), },{ withCredentials: true })
    if(res.data.status)
    {
      alert(res.data.message)
      navigate("/home");
    }

  }
  catch(err)
  {

    alert(res.message);
  }
  }
  return (
    <div>
      <div className="container">
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        inputType="number"
      />
    </div>
    <button onClick={handleverifyotp}>verify</button>
    </div>
  )
}
