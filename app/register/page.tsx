import Link from "next/link";
import RegisterForm from "./form";

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white sm:bg-gray-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <div>
          <Link href='/'>Voltar</Link>
          <h1 className="font-semibold text-2xl">Crie sua conta</h1>
        </div>
        <RegisterForm />
        <p>Já tem uma conta? <Link className="text-indigo-600 hover:underline" href='/api/auth/signin'>Login</Link></p>
      </div>
    </div>
  )
}