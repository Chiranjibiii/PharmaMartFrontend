
import Form from "../Form";
import type { UserDataType } from "../type";
import { register,  resetStatus } from "../../../store/authSlice";

import { useAppSelector, userAppDispatch } from "../../../store/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {    
  const navigate=useNavigate()
  const {status} =useAppSelector((state)=>(state.auth))
  console.log(status);
  
    const dispatch =userAppDispatch()
    const handleRegister=async(data:UserDataType)=>{
        console.log(data);
        dispatch(register(data))
        
        
    }   
    useEffect(()=>{
      if(status=='success'){
        dispatch(resetStatus())
        navigate('/login')
      }
    },[status,navigate,dispatch])
  return (<Form type="register" onsubmit={handleRegister}/>)
};

export default Register;
