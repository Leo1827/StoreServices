import { httpRequest } from "../helpers/httpRequest"

export const registerByEmail = (dataLog:any):any=>{
    const datas = JSON.stringify({
        ...dataLog
    })
    return httpRequest('/Account/SignUp/Email', 'post', datas, false)
}

export const refreshTokenService = ():any =>{
    const token = localStorage.getItem('xToken')
    const headers = {
        'X-Token':token
    }
    return httpRequest('/Account/RefreshToken', 'post', '', true, headers)
}