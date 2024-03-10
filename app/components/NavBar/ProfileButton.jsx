'use client';
import { useAppContext } from '@/context/AppContext';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function ProfileButton() {
  const { currentUser } = useAppContext();
  if (!currentUser) return null; // Hide button if no user is logged in

  const isGoogleUser = currentUser.providerData.some(
    (provider) => provider.providerId === 'google.com'
  );

  return (
    <button className="btn btn-ghost">
      {isGoogleUser ? (
        <Image
          src={currentUser.photoURL}
          alt="Profile"
          width="40"
          height="40"
          className="rounded-full"
        />
      ) : (
        <FaUserCircle className="text-3xl" />
      )}
    </button>
  );
}