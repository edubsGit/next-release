import { prisma } from "./prisma"

export async function addReaction(idLei: string, type: string) {
  try {
    const lei = await prisma.leis.findUnique({
      where: { id: idLei },
    });

    if(lei) {
      if (type === 'like') {
    
        const updatedLei = await prisma.leis.update({
          where: { id: idLei },
          data: { likes: {increment: 1} }
        })
        return updatedLei
      }
      else if (type === 'dislike') {
    
        const updatedLei = await prisma.leis.update({
          where: { id: idLei },
          data: { dislikes: {increment: 1} }
        })
        return updatedLei
      }
      else if (type === 'desnecessario') {
    
        const updatedLei = await prisma.leis.update({
          where: { id: idLei },
          data: { desnecessarios: {increment: 1} }
        })
        return updatedLei
      }
    }
  } catch (error) {
    return {error}
  }
}