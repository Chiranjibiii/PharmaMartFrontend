import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import API from '../http'
import type { Status } from '../globals/types/types'

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
    status:Status
}
const initialState:AuthState={
    user: {} as User,
    status:'loading'
}

const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    
    reducers:{
        setUser(state:AuthState,action:PayloadAction<User>){
            state.user=action.payload
        },
        setStatus(state:AuthState,action:PayloadAction<Status>){
            state.status=action.payload 
        },
        resetStatus(state:AuthState){
            state.status='loading'
        },
        setToken(state:AuthState,action:PayloadAction<Status>){
            state.user.token=action.payload

        }
    }

})

export const {setUser,setStatus,resetStatus,setToken}=authSlice.actions
export default authSlice.reducer

export function register(data:Registerdata){   
    return async function registerThunk(dispatch:any){
        dispatch(setStatus('loading'))
       try {
        const response= await API.post('register',data)
        if(response.status==200){
            dispatch(setStatus('success'))
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
            const response=await API.post('login',data)
            if(response.status == 200){
                const {data}=response.data
                dispatch(setStatus('success'))
                dispatch(setToken(data))
                localStorage.setItem('token',data)
            }else{
                dispatch(setStatus('error'))
            }
        } catch (error) {
            dispatch(setStatus('error'))
        }
    }
}