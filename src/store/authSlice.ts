import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface Registerdata{
    username:string,
    email:string,
    password:string
    
}

interface Logindata{
    email:string,
    password:string
}

interface User{
    username:string,
    email:string,
    password:string,
    token:string
}

interface AuthState{
    user:User
    status:string
}
const initialState:AuthState={
    user: {} as User,
    status:''
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    
    reducers:{
        setUser(state:AuthState,action:PayloadAction<User>){
            state.user=action.payload
        },
        setStatus(state:AuthState,action:PayloadAction<string>){
            state.status=action.payload 
        }
    }

})

export const {setUser,setStatus}=authSlice.actions
export default authSlice.reducer

export function register(data:Registerdata){   
    return async function registerThunk(dispatch:any){
        dispatch(setStatus('loading'))
       try {
        const response= await axios.post('http://localhost:3000/register',data)
        if(response.status==201){
            dispatch(setStatus('sucess'))
        }
        else{
            dispatch(setStatus('error'))
        }
        
       } catch (error) {
            dispatch(setStatus('error'))
       }
    }
}

export function login(data:Logindata){
    return async function loginThunk(dispatch:any) {
        dispatch(setStatus('loading'))  
        try {
            const response=await axios.post('http://localhost:3000/login',data)
            if(response.status == 200){
                dispatch(setStatus('sucess'))
            }else{
                dispatch(setStatus('error'))
            }
        } catch (error) {
            dispatch(setStatus('error'))
        }
    }
}