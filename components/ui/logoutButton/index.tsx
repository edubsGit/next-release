'use client'

import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <>
      <button className='hover:underline' onClick={() => signOut()}>Sair</button>
    </>
  )
}

export default LogoutButton;