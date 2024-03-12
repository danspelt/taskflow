'use client';
import { useAuth } from '@/context/AuthContext';
import { useAppContext } from '@/context/AppContext';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import Menu from './Menu';

export default function ProfileButton() {
  const { currentUser } = useAuth();
  const { setIsProfileMenuOpen } = useAppContext();
  if (!currentUser) return null; // Hide button if no user is logged in

  const isGoogleUser = currentUser.providerData.some(
    (provider) => provider.providerId === 'google.com'
  );
  console.log('isGoogleUser:', isGoogleUser);

  return (
    <button className="btn btn-ghost" onClick={() => {
      setIsProfileMenuOpen((prev) => !prev);
    }}>
      {isGoogleUser ? (
        <div className="">
        <Image
          src={currentUser.photoURL}
          alt="Profile"
          width="40"
          height="40"
          className="rounded-full"
        />
        <Menu/>
        </div>
      ) : (
        <FaUserCircle className="text-3xl" />
      )}
    </button>
  );
}