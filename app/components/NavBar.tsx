"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <span className="font-bold">Task Flow</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/calender" className="py-5 px-3 hover:text-gray-900">
                Calender
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {currentUser ? (
              <>
                <span>
                  Hello, {currentUser.displayName || currentUser.email}
                </span>
              </>
            ) : (
              <Link
                href="/login"
                className="px-3 py-2 rounded bg-gray-700 hover:bg-gray-600"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
