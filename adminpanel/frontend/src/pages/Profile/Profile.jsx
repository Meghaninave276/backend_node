import React, { useEffect, useState } from 'react'
import { base_uri } from '../../utils/globalv.js'
import axios from 'axios'
export default function Profile() {
   const [currentuser,setCurrentuser]=useState({});
   useEffect(()=>{
      getcurrentuser();
   },[])
   const getcurrentuser=async()=>{
      console.log("-----------------------");

      try
      {
         const res = await axios.get(`${base_uri}/admin/getcurrentuser`,{withCredentials:true})
         if(res.data.status)
         {
            console.log(res.data.user);
            setCurrentuser(res.data.user);
            alert(res.data.message);

         }

      }
      catch(err)
      {

         alert(err.message)
      }
   }
    const handleUpdateUser = async (req, res) => {
        try {
            const res = await axios.put(`${base_uri}/updateUser`, currentuser, { withCredentials: true });
            alert(res.data.message)
        }
        catch (err) {
            alert(err.message)
        }
    }
  return (
    <div className='container'>
       <h2 className='text-center'>profile</h2>
       <div className='bg-primary d-flex justify-content-center p-2'>
        <img src="https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg" style={{height:"250px",width:"250px"}} className='rounded-circle bg-light' alt="" />

       </div>

        <div>
            <div className='d-flex gap-3'>
                  <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
         <input type="email"  disabled={true} value={currentuser.email ?? "not assign"} className="form-control" id="exampleFormControlInput2" placeholder="enter email"/>
</div>
            <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
         <input type="text" className="form-control" value={currentuser.name ?? ""} onChange={(e)=>setCurrentuser({...currentuser,name:e.target.value})} id="exampleFormControlInput1" placeholder="enter your name"/>
</div>
 
            </div>
             <div className='d-flex gap-3'>
            <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput3" className="form-label">phone</label>
         <input type="text" value={currentuser.phone ?? ""} className="form-control" id="exampleFormControlInput3" onChange={(e)=>setCurrentuser({...currentuser,phone:e.target.value})} placeholder="enter your phone"/>
</div>
   <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput4" className="form-label"> address</label>
         <input type="text" value={currentuser.address ?? ""} className="form-control" onChange={(e)=>setCurrentuser({...currentuser,address:e.target.value})} id="exampleFormControlInput4" placeholder="enter your address"/>
</div>
            </div>

            <div className='d-flex gap-3'>
            <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput5" className="form-label">education</label>
         <input type="text" value={currentuser.education ?? ""} onChange={(e)=>setCurrentuser({...currentuser,education:e.target.value})} className="form-control" id="exampleFormControlInput5" placeholder="enter your education"/>
</div>
   <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput6" className="form-label"> age</label>
         <input type="number" value={currentuser.age ?? ""} onChange={(e)=>setCurrentuser({...currentuser,age:e.target.value})} className="form-control" id="exampleFormControlInput6" placeholder="enter your age"/>
</div>
            </div>

             <div className='d-flex gap-3'>
            <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput7" className="form-label">experiance</label>
         <input type="text" className="form-control" value={currentuser.experiance ?? ""} onChange={(e)=>setCurrentuser({...currentuser,experiance:e.target.value})} id="exampleFormControlInput7" placeholder="enter your experiance"/>
</div>
   <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput8" className="form-label"> role</label>
         <input type="text" value={currentuser.role ?? ""} onChange={(e)=>setCurrentuser({...currentuser,role:e.target.value})} className="form-control" id="exampleFormControlInput8" placeholder="enter your role"/>
</div>
            </div>

        <div>
            <button className='btn btn-primary w-100' onClick={handleUpdateUser}>update profile</button>
        </div>
        </div>




        
    </div>
  )
}
