import { getServerSession } from "next-auth";
import { prisma } from "./prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Prisma } from "@prisma/client";

export async function getLeis() {
  try {
    const leis = await prisma.leis.findMany({
      orderBy: {
        score: 'desc',
      },
      select: {
        id: true,
        autor: true,
        resumo: true,
        titulo: true,
        likes: true,
        dislikes: true,
        desnecessarios: true,
        inteiro_teor: true,
        autorNome: {
          select: {
            nome: true
          }
        }
      }
    })

    const session = await getServerSession(authOptions);

    if(session && session.user) {
      const userEmail = session.user.email as string

      try {
        const user = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
          select: {
            reactions: true
          },
        })

        if(user) {
          const leisWithReaction = leis.map((lei) => {
            const userReaction= user?.reactions[lei.id];
            return {
              ...lei,
              reaction: userReaction || null,
            };
          });
          return leisWithReaction
        }
      } catch(error) {
        throw error
      }
    }
    
    return leis
  } catch(error) {
    throw error
  }
}