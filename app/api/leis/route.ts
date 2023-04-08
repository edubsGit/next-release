import { getLeis } from "@/lib/prisma/getLeis";
import { NextResponse } from "next/server";

interface AutorNome {
  nome: string;
}

type Lei = {
  id: string,
  titulo: string,
  resumo: string,
  likes: number,
  dislikes: number,
  desnecessarios: number,
  reactions?: string,
  inteiro_teor: string
  autorNome: AutorNome,
  autor: number
}

export async function GET(request: Request) {
  const leis: Lei[] = await getLeis()

  return NextResponse.json(leis)
}