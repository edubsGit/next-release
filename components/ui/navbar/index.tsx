'use client'

import { useSession } from "next-auth/react";
import LoginButton from "../loginButton";
import LogoutButton from "../logoutButton";
import RegisterButton from "../registerButton";
import Image from "next/image";
import Link from "next/link";

type Props = {
  className?: string;
};

const Navbar: React.FC<Props> = ({ className }) => {

  const { data: session, status } = useSession()

  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <Link href='/'>
          <Image src='/logo/logo.png' alt='logo' width={40} height={40}/>
        </Link>
        <div className="flex justify-end gap-4">
          {status == 'authenticated' ? 
          <>
            <LogoutButton />
          </> : 
          <>
            <LoginButton />
            <RegisterButton />
          </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;