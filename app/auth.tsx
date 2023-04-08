'use client'

import { signIn, signOut } from "next-auth/react"

const LoginButton = () => {
  return <button onClick={() => signIn()}>Login</button>
}

const LogoutButton = () => {
  return <button onClick={() => signOut()}>Logout</button>
}

export {LoginButton, LogoutButton}