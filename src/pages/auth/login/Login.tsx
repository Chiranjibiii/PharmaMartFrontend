import { useNavigate } from "react-router-dom";
import Form from "../Form";
import { useAppSelector, userAppDispatch } from "../../../store/hook";
import { login, register, resetStatus } from "../../../store/authSlice";
import type { UserDataType } from "../type";
import { useEffect } from "react";

const Login = () => {
    const navigate=useNavigate()
  const {status} =useAppSelector((state)=>(state.auth))
  console.log(status);
  
    const dispatch =userAppDispatch()
    const handleLogin=async(data:UserDataType)=>{
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
