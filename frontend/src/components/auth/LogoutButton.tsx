'use client'

import { signOut } from 'next-auth/react';
import AuthButton from '../buttons/authbutton/AuthButton';

const LogoutButton = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: '/' })}>
      Sign out
    </button>
  );
};

export default LogoutButton;
