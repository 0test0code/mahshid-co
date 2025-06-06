"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
export const runtime = "experimental-edge";
const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // https://mahshid-co.ir
      const response = await axios.post(
        process.env.NEXT_PUBLIC_ROOT_URL + "/api/sign-up",
        {
          username,
          email,
          password,
        },
      );

      setIsLoading(false);
      toast.success(response.data.message, { duration: 2000, position: "top-center", icon: "😍" });
      setTimeout(() => {
        router.push("/log-in");
      }, 2000);
    } catch (error: any) {
      setIsLoading(false);
      setError(error);
      console.log("Error in sign up: ", error.message);
      toast.error("Password must be at least 8 characters!", { duration: 3000, position: "top-center", icon: "😵" });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] py-10  px-4 md:px-6 max-w-[1500px] mx-auto">
      <div className="bg-white shadow-lg p-10 rounded-xl">
        {error && (<h4 className="text-base text-red-300 bg-black p-3 rounded-md shadow-lg">{error}</h4>)}
        <h2 className="font-semibold  text-base md:text-lg text-center">
          Create an account
        </h2>
        <p className="text-gray-700 text-sm mt-1 text-center">
          Register now to access all features of AppX
        </p>

        <form onSubmit={handleSignup} className="mt-6">
          <div className="flex flex-col text-sm">
            <label className="font-[500] mb-1">Username</label>
            <input
              type="text"
              className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="flex flex-col text-sm mt-6">
            <label className="font-[500] mb-1">Email address</label>
            <input
              type="email"
              className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          <div className="flex flex-col text-sm mt-6">
            <label className="font-[500] mb-1">Password</label>
            <input
              type="password"
              className="border border-gray-400 px-3 py-1.5 rounded-lg mt-1 text-gray-700 font-[400]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center mt-8 w-full">
            <div className="w-full">
              <button
                type="submit"
                className="flex items-center justify-center bg-[#0077b6] rounded-lg px-2 py-2 text-sm font-medium text-gray-50 hover:bg-[#023e8a] w-full md:w-96"
                disabled={isLoading}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>

        <div className="text-center text-sm mt-6">
          <p>
            Already have an account?{" "}
            <Link href={"/log-in"} className="text-[#0077b6]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

