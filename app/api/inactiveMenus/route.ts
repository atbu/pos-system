import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    /* 
    Creates a Prisma request to find any menus that do not have an 'active' flag,
    and specifically selects the ID, title and slug fields.
    */
    const request = await prisma.menu.findMany({
      where: {
        NOT: {
          active: true,
        }
      },
      select: {
        id: true,
        title: true,
        slug: true,
      }
    })

    // Returns the requested menus as JSON in a NextResponse.
    return new NextResponse(JSON.stringify(request), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching the inactive menus." } ),
      { status: 500 }
    )

  }

}
