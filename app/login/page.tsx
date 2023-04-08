import Link from "next/link";
import LoginForm from "./form";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white sm:bg-gray-100">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <div>
          <Link href='/'>Voltar</Link>
          <h1 className="font-semibold text-2xl">Login</h1>
        </div>
        <LoginForm />
        <p>Não tem uma conta ainda? <Link className="text-indigo-600 hover:underline" href='/register'>Criar conta</Link></p>
      </div>
    </div>
  )
}