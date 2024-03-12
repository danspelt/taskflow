"use client";
import { useAuth } from "@/context/AuthContext";
import { useAppContext } from "@/context/AppContext";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Menu from "./Menu";

export default function ProfileButton() {
  const { currentUser } = useAuth();
  const { setIsProfileMenuOpen, isProfileMenuOpen } = useAppContext();
  if (!currentUser) return null; // Hide button if no user is logged in

  const isGoogleUser = currentUser.providerData.some(
    (provider) => provider.providerId === "google.com"
  );
  console.log("isGoogleUser:", isGoogleUser);

  return (
    <div className="relative">
      <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
        {isGoogleUser ? (
          <Image
            src={currentUser.photoURL}
            alt={currentUser.displayName}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <FaUserCircle className="text-3xl" />
        )}
      </button>
      <Menu />
    </div>
  );
}
