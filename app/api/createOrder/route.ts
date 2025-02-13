import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../util/prisma'

export const POST = async (req: NextRequest) => {

  try {

    // Requests the body sent in the request and converts it back from JSON.
    const body = await req.json()

    /*
    Creates a Prisma request to create a new order with the data (price, products and status)
    passed in the body of the request.
    */
    const request = await prisma.order.create({
      data: {
        price: body.price,
        products: body.products,
        status: body.status
      }
    })

    // Returns a NextResponse with the request details.
    return new NextResponse(JSON.stringify(request), { status: 201 })

  } catch(err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }      
    )

  }

}