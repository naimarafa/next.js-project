"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/"); // redirect to home
    } else {
      alert("Invalid email or password");
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google");
    
  };

  return (
   <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Login</h2>

      <form onSubmit={handleSignin} className="mt-4 space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <button className="btn btn-primary w-full">Login</button>
      </form>

      <button
        onClick={() => signIn("google")}
        className="btn btn-outline w-full mt-4"
      >
        Login With Google
      </button>
    </div>
  );
}
