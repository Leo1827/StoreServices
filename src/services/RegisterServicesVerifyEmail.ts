import { httpRequest } from "../helpers/httpRequest";

export const sendVerificationLink = (email:string):any => {
    return httpRequest(`/Account/Email/${email}/SendVerificationLink`, "post", "", false)
}
