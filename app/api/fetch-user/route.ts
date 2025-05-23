import { connectDB } from "../config/db";
import User from "../models/user.model";
import { cookies } from "next/headers";

export const runtime = "experimental-edge";
export async function GET(request: Request) {

  // Check for cookies
  //const token = cookies().get("token");

  const tokenObj = cookies().get("token");
  const token = tokenObj?.value;
  if (token) {
    try {
      //Connect to Database
      await connectDB();
      const user = await User.findById(token).select("-password"); // remove the password

      if (!user) {
        console.log("Error when fetching user, User not found.")
        return Response.json({ message: "User not found." }, { status: 400 });
      }



      return Response.json({ user }, { status: 200 });

    } catch (error: any) {
      //console.log("Error in fetching user", error);
      return Response.json({ message: error.message }, { status: 400 });
    }
  }
  else { //console.log("There is no token, you are unauthorised, You may not sign-in, status 401.");
    return Response.json({ message: "Unauthorised." }, { status: 401 });
  }




}
