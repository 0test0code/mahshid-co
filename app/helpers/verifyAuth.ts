
import {jwtVerify, SignJWT } from "jose";
// library for generating symmetric key for jwt
//import { createSecretKey } from "crypto";
// interface UserJwtPayload {
//     jti: string
//     iat: number
// }

export const getJwtSecretKey = () =>{
   const secret = process.env.JWT_SECRET;
   if(!secret || secret.length === 0){
    console.error("O0oh!. The secret credentials or variables are not set!");
    throw new Error("O0oh!. The secret credentials or variables are not set!");
   }
   return secret;
}

export const verifyAuth  = async (token : string) =>{
       try {
    const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
    
    return verified;
        
       } catch (error) { console.log("O0ops Your token has expired!");
        throw new Error("O0ops Your token has expired!");
        
       }
}