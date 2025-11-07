import axios from 'axios'

const baseURL = import.meta.env.VITE_NODE_ENVIRONMENT === 'dev'
    ? import.meta.env.VITE_BACKEND_URL_DEV
    : import.meta.env.VITE_BACKEND_URL_PROD


interface Params {
    baseUrl: string
    headers : any
    method: string
}

const baseConfig:Params = {
    baseUrl:baseURL,
    headers:{
        'Authorization': '',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Version':'1.0',
        'Accept-Language':'es',
        'culture':'es'
    },
    method:'post'
}


export const httpRequest = async (url:string, method:string , data:any, auth:boolean, headerEx:object|null=null):Promise<any> => {
    const token = localStorage.getItem('token')
    if (auth && token != null) {
        baseConfig.headers = {
            ...baseConfig.headers,
            ...headerEx,
            Authorization: 'Bearer ' + token
        }
    }

    

    return await axios({
        ...baseConfig,
        url:`${baseConfig.baseUrl}${url}`,
        data,
        method
    }).then(resp=>{ 
        return resp
    }).catch(err=>{
        return err
    })
}