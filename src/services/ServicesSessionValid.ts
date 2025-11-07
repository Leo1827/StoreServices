import { httpRequest } from "../helpers/httpRequest";

export const verifySessionEmail = (email:string) => {
    return httpRequest(`/Account/Email/${email}`, "get", "", false)
}

