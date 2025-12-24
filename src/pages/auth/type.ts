export interface Props{
  type:string,
  onsubmit:(data:UserDataType)=>void
}

export interface UserDataType{
    email:string,
    username:string,
    password:string
}