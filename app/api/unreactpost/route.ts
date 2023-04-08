import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/prisma';
import { subtractReaction } from '@/lib/prisma/subtractReaction';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const type = searchParams.get('type');

  if (!type) {
    return new NextResponse('provide a reaction type', {status: 400})
  }

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

  subtractReaction(id, type)

  return new NextResponse(email)
}