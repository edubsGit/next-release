import ButtonReaction from "./ButtonReaction";
import Link from "next/link";
import ImageProfile from "@/components/ui/image";
import Comments from "@/components/ui/comments";
import PercentageBar from "@/components/ui/bar";
import { getLeis } from "@/lib/prisma/getLeis";

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
  reaction?: string,
  inteiro_teor: string
  autorNome: AutorNome,
  autor: number
}

export default (async function LeisComponent() {
  const leis: Lei[] = await getLeis()
  return (
    <div>
      {leis.map((item: any) => (
        <div key={item.id}>
          <div className="px-5 sm:px-20 md:px-64 lg:px-96">
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <Link href={item.inteiro_teor} target="_blank" className="text-xl font-semibold">{item.titulo}</Link>
                <p className="text-gray-400 font-semibold">{item.autorNome.nome}</p>
              </div>
              <ImageProfile className="w-20 h-20 rounded-full"
                        src={`/images/${item.autor}.jpg`}
                        alt={item.autorNome.nome}
                        width={60} height={60} />
            </div>
            <p className="text-base mt-3">{item.resumo}</p>
            <div className="mt-4">
              <ButtonReaction idLei={item.id} reactionStart={item.reaction} likeCountStart={item.likes} dislikeCountStart={item.dislikes} unncessaryCountStart={item.desnecessarios}/>
            </div>
            <div className="mt-4">
              <Comments />
            </div>
          </div>
          <div className="px-0 md:px-64 lg:px-96">
            <div className="h-0.5 bg-gray-100 mb-10 mt-10"></div>
          </div>
        </div>
      ))}
    </div>
  )
} as unknown as () => JSX.Element)

