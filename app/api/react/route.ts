import { addReaction } from "@/lib/prisma/addReaction";
import { prisma } from "@/lib/prisma/prisma";
import { subtractReaction } from "@/lib/prisma/subtractReaction";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

type ReactionsType = Prisma.JsonObject;

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  const { searchParams } = new URL(request.url);
  const idLei: string | null = searchParams.get('id');
  const type: string | null = searchParams.get('type');

  if (!idLei){
    return new NextResponse('provide an id', {status: 400})
  }

  if(!session || !session.user) {
    return new NextResponse('unauthorize', {status: 400})
  }

  if (!type) {
    return new NextResponse('provide a type', {status: 400})
  }

  const email = session.user.email

  const user = await prisma.user.findUnique({
    where: { email: email as string },
    select: {
      reactions: true,
    },
  });

  if (!user) {
    return new NextResponse('user not found', {status: 404})
  }

  const reactionObj = user?.reactions as Prisma.JsonObject | object;
  const currentReaction = (reactionObj as any)[idLei];

  const existingReactions: Prisma.JsonValue = user.reactions;
  const updatedReactions = { ...existingReactions as Prisma.JsonObject, [idLei]: type };

  if (currentReaction) {
    if (currentReaction == type) {
      delete updatedReactions[idLei];
    }
    console.log('subtracted')
    subtractReaction(idLei, currentReaction)
  }

  if(currentReaction != type) {

    console.log('added')
    addReaction(idLei, type)
  }

  await prisma.user.update({
    where: { email: email as string },
    data: { reactions: updatedReactions },
  });

  return new NextResponse(type + ' UPDATED to ' + idLei)
}