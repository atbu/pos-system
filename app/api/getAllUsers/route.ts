import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    // Creates a Prisma request to get all users, sorted in ascending order of their IDs.
    const request = await prisma.user.findMany({
      orderBy: {
        id: 'asc',
      },
    })

    // Returns the requested orders as JSON in a NextResponse.
    return new NextResponse(JSON.stringify(request), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching all the users." } ),
      { status: 500 }
    )

  }

}