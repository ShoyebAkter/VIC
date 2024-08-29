import React from 'react'
import BookingData from './BookingData'
import {  signOut } from "firebase/auth";
import { auth } from '../firebase.init';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate=useNavigate();
  const signOutData=()=>{
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className=''>
      <nav >
        <div className="flex justify-between items-center">
          <img className="headerLogo" src="/logo2.png" alt="" />
          <div className="p-3 bg-yellow-300 rounded-2xl font-semibold cursor-pointer" onClick={signOutData}>Logout</div>
        </div>
        
        
      </nav>
      <BookingData/>
    </div>
  )
}

export default Dashboard
