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
        <Link href='/' className="flex items-center space-x-1.5">
          <Image src='/logo/logo.png' alt='logo' width={25} height={25}/>
          <h1 className="font-semibold text-lg">Lei Aberta</h1>
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