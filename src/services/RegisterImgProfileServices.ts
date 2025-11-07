import axios from "axios";
import { httpRequest } from "../helpers/httpRequest";

const baseURL = import.meta.env.VITE_NODE_ENVIRONMENT === 'dev'
    ? import.meta.env.VITE_BACKEND_URL_DEV
    : import.meta.env.VITE_BACKEND_URL_PROD


export const registerByImgProfile = (data:any)=>{
    const datas = JSON.stringify({
        ...data
    })
    const token = localStorage.getItem('token')
   
   return  axios.post(`${baseURL}/UserData/UploadProfilePicture`,data,{
        headers: {
          'Content-Type': 'multipart/form-data; boundary=${formData._boundary}',
          'Authorization': 'Bearer ' + token,
          
        }})
    
}
