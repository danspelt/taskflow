'use client';           
import React, { useState } from 'react';

const PasswordInput = () => {
  const [password, setPassword] = useState('');

  return (
    <div>
      <label htmlFor="password" className="sr-only">Password</label>
      <input 
        type="password" 
        name="password" 
        id="password" 
        autoComplete="current-password" 
        required 
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
    </div>
  );
};

export default PasswordInput;
