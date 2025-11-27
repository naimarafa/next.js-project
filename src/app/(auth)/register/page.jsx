"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Link from "next/link";

export default function RegisterPage() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  // Show/Hide password
  const handleShow = () => {
    setShow(!show);
  };

  // Form submit signup
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Signup Data:", { name, photo, email, password });

    // TODO: Add your signup logic
  };

  // Google sign in
  const handleGoogleSignIn = () => {
    console.log("Google Login Clicked");
    // TODO: Add your Google Auth logic
  };

  return (
    <div className="">
      <div className="card bg-base-100 w-[400px] mx-auto shadow-2xl">
        <h1 className="text-2xl p-5 font-bold text-center pb-3">
          Signup to create account
        </h1>

        <form onSubmit={handleSignUp} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              required
            />

            {/* Photo */}
            <label className="label">Photo Url</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <span
                className="absolute top-3 right-12 cursor-pointer"
                onClick={handleShow}
              >
                {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </span>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Signup
            </button>

            <p className="text-center">Or</p>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              Login with Google
            </button>
          </fieldset>

          {error && <p className="text-red-500">{error}</p>}

          <p className="text-center">
            Already have an account?{" "}
            <Link
              className="font-semibold text-primary hover:underline"
              href="/auth/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
