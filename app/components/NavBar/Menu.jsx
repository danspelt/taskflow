'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useAppContext } from '@/context/AppContext';
const Menu = () => {
  const { isProfileMenuOpen } = useAppContext(); 
  const { currentUser, signout } = useAuth();
  // Apply conditional classes based on isOpen prop
  const menuClasses = isProfileMenuOpen ? "block" : "hidden";

  return (
    <div className={`absolute top-0 left-0 mt-16 ${menuClasses} z-50`}>
      <div className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content shadow-lg">      
        <li className="border-b-2 border-gray">
          <Link href="/profile">
          <Image
            src={currentUser.photoURL}
            alt={currentUser.displayName}
            width={40}
            height={40}
            className="rounded-full"
          />
          Profile          
        </Link>
        </li>
        <li className="border-b-2 border-gray">
          <Link href="/order-history">Order History</Link>
        </li>
        {
          currentUser && (
            <li className="border-b-2 border-gray">
              <Link href="/admin/dashboard">Admin Dashboard</Link>
            </li>
        )}        
        <li>
           <button onClick={signout}>Sign out</button>
        </li>
      </div>
    </div>
  );
};

export default Menu;