import Link from "next/link";
import RegisterForm from "./form";
import Image from "next/image";

export default function RegisterPage() {
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
          <h1 className="font-semibold text-2xl">Crie sua conta</h1>
        </div>
        <RegisterForm />
        <p>Já possui uma conta? <Link className="text-indigo-600 hover:underline" href='/api/auth/signin'>Login</Link></p>
      </div>
    </div>
  )
}