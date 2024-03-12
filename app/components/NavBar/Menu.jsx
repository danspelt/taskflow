'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useAppContext } from '@/context/AppContext';
const Menu = () => {
  const { isProfileMenuOpen } = useAppContext(); 
  const { currentUser, logout } = useAuth();
  // Apply conditional classes based on isOpen prop
  const menuClasses = isProfileMenuOpen ? "block" : "hidden";

  return (
    <div className={`absolute right-0 ${menuClasses}`}>
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
        <li>
           <button onClick={() => logout()} className="btn btn-ghost">Logout</button> 
        </li>
      </div>
    </div>
  );
};

export default Menu;