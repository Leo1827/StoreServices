import { httpRequest } from "../helpers/httpRequest";

export const credentialsSessionValid = (email:string, password:string) => {
    const data = { email: email, password: password };
    return httpRequest(`/Account/Login/Email`, "post", data, true)
}
