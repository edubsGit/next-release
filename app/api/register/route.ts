import { prisma } from "@/lib/prisma/prisma"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    const hashed = await hash(password, 12)

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return new NextResponse(JSON.stringify({
        error: 'Email já cadastrado'
      }), {
        status: 500
      })
    }
  
    const user = await prisma.user.create({
      data: {
        name, email, password: hashed
      }
    })
  
    return NextResponse.json({
      user: {
        email: user.email
      }
    })
  } catch(err: any) {
    return new NextResponse(JSON.stringify({
      error: err.message
    }), {
      status: 500
    })
  }
}