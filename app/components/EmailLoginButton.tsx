'use client';

import { useAuth } from '@/context/AuthContext'; 

const EmailLoginButton =() => {
    const { login } = useAuth();
  return (
    <button
      onClick={login}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Login with Email
    </button>
  );
};

export default EmailLoginButton;