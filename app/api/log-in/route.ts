import bcryptjs from "bcryptjs";
import User from "@/app/api/models/user.model";
import { setCookie } from "@/app/Cookies/setCookie";
import { connectDB } from "../config/db";
export const runtime = process.env.NEXT_PUBLIC_RUNTIME || "experimental-edge" || "edge" || undefined;

export async function POST(request: Request) {
  await connectDB();
  const { email, password } = await request.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return Response.json(
        { message: "The user doesn't exist!" },
        { status: 400 }
      );
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return Response.json(
        { message: "The password is wrong." },
        { status: 400 }
      );
    }
    //Set the cookie
    setCookie(user._id);

    return Response.json(
      {
        message: "Logged in successfully.",
        user: { ...user.toObject(), password: undefined },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("Error logging in", error);
    return Response.json({ message: error.message }, { status: 400 });
  }
}
