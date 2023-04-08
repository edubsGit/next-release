import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/prisma';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { addReaction } from '@/lib/prisma/addReaction';

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const type = searchParams.get('type');

  if (!id){
    return new NextResponse('provide an id', {status: 400})
  }

  if(!session || !session.user) {
    return new NextResponse('unauthorize', {status: 400})
  }

  const email = session.user.email

  const user = await prisma.user.findUnique({
    where: { email: email as string },
  });

  if (!user) {
    return new NextResponse('user not found', {status: 404})
  }

  if (type === 'like') {

    const existingReactions: Record<string, string> = user.reactions || {};
    const updatedReactions: Record<string, string> = { ...existingReactions, [id]: 'like' };

    await prisma.user.update({
      where: { email: email as string },
      data: { reactions: updatedReactions },
    });

    addReaction(id, 'like')
  }

  else if(type === 'dislike') {

    const existingReactions: Record<string, string> = user.reactions || {};
    const updatedReactions: Record<string, string> = { ...existingReactions, [id]: 'dislike' };

    await prisma.user.update({
      where: { email: email as string },
      data: { reactions: updatedReactions },
    });

    addReaction(id, 'dislike')
  }

  else if(type === 'desnecessario') {

    const existingReactions: Record<string, string> = user.reactions || {};
    const updatedReactions: Record<string, string> = { ...existingReactions, [id]: 'desnecessario' };

    await prisma.user.update({
      where: { email: email as string },
      data: { reactions: updatedReactions },
    });

    addReaction(id, 'desnecessario')
  }

  return new NextResponse(email)
}
