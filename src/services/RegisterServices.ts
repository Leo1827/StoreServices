import { httpRequest } from "../helpers/httpRequest";

export const verifyEmail = (email:string) => {
    return httpRequest(`/Account/Email/${email}`, "get", "", false)
}

export const registerByEmail = (data:object)=>{
    const datas = JSON.stringify({
        ...data
    })
    return httpRequest('/Account/SignUp/Email','post',datas,false)
}

export const registerUserData =(data:object)=>{
    const datas = JSON.stringify({
        ...data
    })

    return httpRequest('/UserData','put',datas,true)
}