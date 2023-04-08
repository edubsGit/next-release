'use client'

import Link from "next/link";

const RegisterButton = () => {
  return (
    <>
      <Link className='hover:underline' href='/register'>Criar conta</Link>
    </>
  )
}

export default RegisterButton;