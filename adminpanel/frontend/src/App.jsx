
// import './App.css'
import {Routes,Route} from 'react-router-dom'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import Verifyotp from './pages/Verifyotp/Verifyotp'
import Verifyforgetpass from './pages/Verifyforgetpass/Verifyforgetpass'
import Forgetpass from './pages/Forgetpass/Forgetpass'
import Changepass from './pages/Changepass/Changepass'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'

function App() {
 

  return (
    <>
   <Routes>
    <Route path='/' element={<Signin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/vo' element={<Verifyotp/>}/>
    <Route path='/vfp' element={<Verifyforgetpass/>}/>
    <Route path='/fp' element={<Forgetpass/>}/>
    <Route path='/cp' element={<Changepass/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
   </Routes>
    </>
  )
}

export default App
