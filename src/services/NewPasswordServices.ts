import { httpRequest } from "../helpers/httpRequest";

export const CodeValidPassword = (recoveryCode: string) => {
    return httpRequest(`/Account/Validation/RecoveryCode/${recoveryCode}`, "get", "", false)
}

export const NewPassword = (data:object) => {

    const datas2 = JSON.stringify({
        ...data
    })
    
    return httpRequest(`/Account/Password/ResetByRecoveryCode`, "post", datas2, false)
}