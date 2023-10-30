import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { Item, Size, Status } from '@prisma/client'

export async function POST(req: Request) {
    // const { item } = await req.json();

    const createOrder = await prisma.order.create({
          data: {
            items: {
              create: { 
                item: Item.CHEESEBURGER,
                size: Size.SMALL,
                price: 8.50,
              },
            },
            total: 8.50,
            status: Status.NEW,
          },
        })

    return NextResponse.json({ message: 'Created an order.' }, { status: 200 });
}
