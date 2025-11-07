import { httpRequest } from "../helpers/httpRequest";

export const getAllCategorysService = ():any=>{
    return httpRequest('/Services/TopSelling?Limit=3&OrderBy=DESC','get','',false)
}