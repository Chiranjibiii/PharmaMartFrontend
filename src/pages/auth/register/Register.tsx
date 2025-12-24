import { useDispatch } from "react-redux";
import Form from "../Form";
import type { UserDataType } from "../type";
import { register } from "../../../store/authSlice";
import axios from "axios";

const Register = () => {    
    const dispatch =useDispatch()
    const handleRegister=async(data:UserDataType)=>{
        console.log(data);
        // dispatch(register(data))
        const response=await axios.post('http://localhost:3000/register',data)
        
    }   
  return (<Form type="register" onsubmit={handleRegister}/>)
};

export default Register;
