import { getUsers } from "@/lib/prisma/getUsers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const users = await getUsers()

  return NextResponse.json(users)
}