import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    /*
    Creates a Prisma request to find any uncompleted orders, i.e.
    orders that do not have a status of "Completed".
    */
    const request = await prisma.order.findMany({
      where: {
        NOT: {
          status: "Completed",
        },
      },
    })

    // Returns the requested orders in a NextResponse.
    return new NextResponse(JSON.stringify(request), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching the active menu." } ),
      { status: 500 }
    )

  }

}