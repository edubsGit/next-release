'use client'

import Alert from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl
      })

      if (!res?.error) {
        router.push(callbackUrl)
      }
      else {
        setError('Email ou senha inválidos')
      }
    } catch(err) {}
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8 w-full sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input 
          value={email}
          required
          onChange={(e) => {setEmail(e.target.value)}}
          type="email" 
          id="email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Senha</Label>
        <Input
          value={password}
          required
          onChange={(e) => {setPassword(e.target.value)}}
          type="password" 
          id="password" />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full" size='lg'>Login</Button>
      </div>
    </form>
  )
}

export default LoginForm