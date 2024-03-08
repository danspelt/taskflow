"use client";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const GoogleSignInButton = () => {
  const { loginWithGoogle } = useAuth();
  const router = useRouter();
  const onSignIn = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={onSignIn}
      className="btn btn-outline btn-accent flex items-center justify-center w-full"
    >
      <FcGoogle className="mr-2" /> Sign in with Google
    </button>
  );
};

export default GoogleSignInButton;
