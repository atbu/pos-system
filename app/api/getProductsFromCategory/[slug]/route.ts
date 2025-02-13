import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../util/prisma'

// The slug is passed in through the URL of the API route - i.e. '.../getProductsFromCategory/lunch'
export const GET = async (req: NextRequest, { params }: { params: { slug: string } } ) => {

  try {

    // Creates a Prisma request to find any products with the passed catSlug (category slug).
    const request = await prisma.product.findMany({
      where: {
        catSlug: params.slug,
      },
    })

    // Returns the requested products as JSON in a NextResponse.
    return new NextResponse(JSON.stringify(request), { status: 200 })

  } catch(err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      )

  }
}