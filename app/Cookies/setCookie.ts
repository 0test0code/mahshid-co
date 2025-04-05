

import { cookies } from "next/headers";
export const setCookie = async (userId:any) =>{

    const token = userId;
    //Set the Cookie
    const cookieStore = cookies();
    cookieStore.set("token", token,{  
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1 *24*60*60,
       // expires: Date.now() + 24*60*60*1000*1,
        //path:"/menu-games/:path*"
       
    });

    return token;
} 
 //   import 'server-only';
   // import { SessionPayload } from '@/app/helpers/definitions';
//import { SignJWT,  jwtVerify } from "jose";
//import { ObjectId } from "mongoose";
// import { cookies } from "next/headers";

// const secretKey = process.env.JWT_SECRET;
// const encodedKey = new TextEncoder().encode(secretKey);

// export async function encrypt(payload: any) { return new SignJWT(payload)
//                                                       .setProtectedHeader({alg:"HS256"})
//                                                         .setIssuedAt()
//                                                           .setExpirationTime('1d')
//                                                             .sign(encodedKey);
                                                            
//                                                   }

// export async function decrypt(session: string) {   try { 
//                         const {payload} = await jwtVerify(session, encodedKey, {
//                             algorithms: ['HS256']
//                         });
//                         return payload.sub;
    
// } catch (error) { console.log("Faild to verify session : ", error);
    
// }
    
//                                           }

// export async function createSession(userId:any) { const expiresAt = new Date(Date.now() + 1 *24*60*60
//     * 1000);
//     const token = await encrypt({userId, expiresAt});
//     const cookieStore = cookies();
//     cookieStore.set("token", token,{  
//         httpOnly: true,
//         secure: true,
//         sameSite: "strict",
//         maxAge: 1 *24*60*60,
//        // expires: Date.now() + 24*60*60*1000*1,
//         //path:"/menu-games/:path*"
//        //Or secure: process.env.NODE_ENV === "production",  samesite:"lax",
//     })
//  //   return token;
// }