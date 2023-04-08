'use client'

import Alert from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { signIn } from "next-auth/react"
import { useState } from "react"

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({
          email, password
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(res.ok) {
        signIn()
      }
      else {
        setError((await res.json()).error)
      }
    } catch(error: any) {
      setError(error?.message)
    }
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
        <Label htmlFor="password">Password</Label>
        <Input
          value={password}
          required
          onChange={(e) => {setPassword(e.target.value)}}
          type="password" 
          id="password" />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className="w-full">
        <Button className="w-full" size='lg'>Register</Button>
      </div>
    </form>
  )
}

export default RegisterForm;