import { httpRequest } from "../helpers/httpRequest";


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const sendPasswordRecovery = async (email:string) => {
    return await httpRequest(`/Account/Email/${email}/SendPasswordRecoveryLink`, "post", "", false)
}

export const cronometroRecovery = async (): Promise<number> => {
    // Define una función asíncrona llamada "cronometroRecovery" que no toma ningún argumento y devuelve una promesa de tipo "number"
    
    return await httpRequest('/Account/SignUp/Email', 'post', null, false)
    // Espera a que se resuelva la promesa devuelta por la función "httpRequest" antes de continuar
    // La función "httpRequest" realiza una solicitud HTTP POST a la ruta '/Account/SignUp/Email' sin enviar datos y sin autenticación
    // La respuesta de la solicitud se pasará al siguiente "then" para su procesamiento
    
      .then((response) => {
        // Cuando la promesa de "httpRequest" se resuelva, se ejecutará esta función de devolución de llamada con la respuesta como argumento
        console.log(response);
        
        
        const data = JSON.parse(response.data);
        // Analiza el cuerpo de la respuesta JSON y lo convierte en un objeto JavaScript
        // La propiedad "data" contiene los datos específicos que necesitamos para el cronómetro
        
        const minutes = parseInt(data.data);
        // Extrae el valor numérico de la propiedad "data" y lo convierte en un entero
        
        return minutes * 60;
        // Devuelve el valor de "minutes" multiplicado por 60 para convertir los minutos en segundos
      });
  };