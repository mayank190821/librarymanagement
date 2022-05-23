import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

function AuthPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("user")){
            navigate("/login")
        }
        else{
            navigate("/home")
        }
    },[]);
  return (
      <>
      </>
  )
}

export default AuthPage