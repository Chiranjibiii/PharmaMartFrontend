import { useNavigate } from "react-router-dom";
import Form from "../Form";
import { useAppSelector, useAppDispatch } from "../../../store/hook";
import { login, resetStatus } from "../../../store/authSlice";
import type {  UserLoginType } from "../type";
import { useEffect } from "react";

const Login = () => {
    const navigate=useNavigate()
  const {status} =useAppSelector((state)=>(state.auth))

  
    const dispatch =useAppDispatch()
    const handleLogin=async(data:UserLoginType)=>{
        console.log(data);
        dispatch(login(data))
        
        
    }   
    useEffect(()=>{
      if(status=='success'){
        dispatch(resetStatus())
        navigate('/')
      }
    },[status,navigate,dispatch])
  return (
    <Form type="login" onsubmit={handleLogin}/>
  )
};

export default Login;
