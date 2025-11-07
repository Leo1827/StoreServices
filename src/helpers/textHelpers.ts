/* Verificar si un texto contiene mayusculas */
export const hasUppercase = (text:string):boolean=>{
    
    const regex = /[A-Z]/;

    return regex.test(text)
    
}


/* verificar si un texto contiene minusculas */
export const hasLowecase = (text:string):boolean=>{
    
    const regex = /[a-z]/;

    return regex.test(text)
    
}

/* verificar si un texto contiene caracteres */
export const hasCharacters = (text:string):boolean=>{
    
    const regex = /[!@#$%^&*,.?¿]/;
    return regex.test(text)
    
}

/* verificar si un texto contiene numeros */
export const hasNumber = (text:string):boolean=>{
    
    const regex = /[0-9]/;
    return regex.test(text)
}

export const hasSimbolOrNumber = (text:string):boolean => {
    // La siguiente expresión regular coincide con cualquier caracter que no sea una letra
    const  regex = /[^a-zA-Z]/;
    
    return regex.test(text)
  }