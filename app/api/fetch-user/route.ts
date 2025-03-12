
import jwt, { JwtPayload } from "jsonwebtoken";
import { connectDB } from "../config/db";
import User from "../models/user.model";

import { setCookie } from "@/app/Cookies/setCookie"
import { cookies } from "next/headers";

export async function GET(request: Request) {   //Connect to Database
  await connectDB();
  // Check for cookies
  const token = cookies().get("token");

  if (!token) { console.log("There is no token, you are unauthorised, You may not sign-in, status 401.");
    return Response.json({ message: "Unauthorised." }, { status: 401 });
  } else {    try {
                      const decoded = jwt.verify(token.value, process.env.JWT_SECRET as string);

                      if (!decoded) { console.log("there is an error with Secret key- invalid token")
                        return Response.json({message:"Unauthorised - invalid token"});
                      }

                      const userId = (decoded as JwtPayload).userId;

                      const user = await User.findById(userId).select("-password"); // remove the password

                      if (!user) {
                        return Response.json({ message: "User not found." }, { status: 400 });
                      }
                        
                          

                      return Response.json({ user }, { status: 200 });
                    } catch (error: any) {
                      console.log("Error in fetching user", error);
                      return Response.json({ message: error.message }, { status: 400 });
                    }

  }

  
}
export const runtime = 'edge';