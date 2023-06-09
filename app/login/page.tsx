'use client'

import Link from "next/link";
import LoginForm from "./form";
import Image from "next/image";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sm:h-screen sm:w-screen flex justify-center items-center bg-white sm:bg-gray-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-8 sm:bg-white rounded-xl space-y-8">
        <div>
          <div className="inline-block w-auto mb-10">
            <Link href='/' className="flex items-center space-x-1.5">
              <Image src='/logo/logo.png' alt='logo' width={30} height={30}/>
              <h1 className="font-semibold text-xl">Lei Aberta</h1>
            </Link>
          </div>
          <h1 className="font-semibold text-2xl">Login</h1>
        </div>
        <LoginForm />
        <p>Não tem uma conta ainda? <Link className="text-indigo-600 hover:underline" href='/register'>Criar conta</Link></p>
      </div>
    </div>
  )
}

export default LoginPage