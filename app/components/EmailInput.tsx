'use client';
import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <label htmlFor="email" className="sr-only">Email address</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        autoComplete="email" 
        required 
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
        placeholder="Email address" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
    </div>
  );
};

export default EmailInput;