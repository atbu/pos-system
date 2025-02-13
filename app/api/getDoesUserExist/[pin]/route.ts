import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../util/prisma'

// The PIN is passed in through the URL of the API route - i.e. '.../getDoesUserExist/8573'
export const GET = async (req: NextRequest, { params }: { params: { pin: string } } ) => {

  try {

    // Creates a Prisma request to find any products with the passed catSlug (category slug).
    const request = await prisma.user.findMany({
      where: {
        pin: params.pin,
      },
    })

    const doesUserExist = request.length !== 0

    // Returns a Boolean stating whether a user exists with this specific PIN as JSON in a NextResponse.
    return new NextResponse(JSON.stringify(doesUserExist), { status: 200 })

  } catch(err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      )

  }
}