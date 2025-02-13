import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    // Creates an object containing the current date.
    const currentDate = new Date(); 

    // Creates an object containing the date exactly a week ago.
    const lastWeekDate = new Date(currentDate.getTime() 
            - 7 * 24 * 60 * 60 * 1000); 

    // Creates a Prisma request to get all tips from the last week.
    const request = await prisma.tip.findMany({
      where: {
        createdAt: {
          gt: lastWeekDate,
        }
      },
      select: {
        amount: true,
        user: {
          select: {
            pin: true,
          }
        },
        order: {
          select: {
            id: true,
          }
        }
      }
    })

    // Returns the requested orders as JSON in a NextResponse.
    return new NextResponse(JSON.stringify(request), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching all tips from the last week." } ),
      { status: 500 }
    )

  }

}