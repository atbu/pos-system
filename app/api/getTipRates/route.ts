import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    // The current date in Unix time.
    const currentDate = new Date(); 

    // The Unix timestamp of this time, a week ago.
    const lastWeekDate = new Date(currentDate.getTime() 
            - 7 * 24 * 60 * 60 * 1000); 

    // Creates a Prisma request to count the number of all tips from the last week.
    const tipLastWeekCount = await prisma.tip.count({
      where: {
        createdAt: {
          gt: lastWeekDate,
        }
      },
    })

    // Creates a Prisma request to count the number of all orders from the last week.
    const orderLastWeekCount = await prisma.order.count({
      where: {
        createdAt: {
          gt: lastWeekDate,
        }
      }
    })

    /*
    Divides the amount of tips last week by the amount of orders last
    week to find the percentage of orders that included a tip last week.
    */
    const tipRateLastWeek = tipLastWeekCount / orderLastWeekCount

    // The Unix timestamp of this time, a month ago.
    const lastMonthDate = new Date(currentDate.getTime()
            - 30 * 24 * 60 * 60 * 1000); 

    // Creates a Prisma request to count the number of all tips from the last month.
    const tipLastMonthCount = await prisma.tip.count({
      where: {
        createdAt: {
          gt: lastMonthDate,
        }
      },
    })

    // Creates a Prisma request to count the number of all orders from the last month.
    const orderLastMonthCount = await prisma.order.count({
      where: {
        createdAt: {
          gt: lastMonthDate,
        }
      }
    })

    /*
    Divides the amount of tips last month by the amount of orders last
    month to find the percentage of orders that included a tip last month.
    */
    const tipRateLastMonth = tipLastMonthCount / orderLastMonthCount

    // Counts the total number of tips.
    const totalTipCount = await prisma.tip.count()
    
    // Counts the total number of orders.
    const totalOrderCount = await prisma.order.count()

    const tipRateAllTime = totalTipCount / totalOrderCount

    // Returns the requested orders as JSON in a NextResponse.
    return new NextResponse(JSON.stringify({ lastWeek: tipRateLastWeek, lastMonth: tipRateLastMonth, allTime: tipRateAllTime }), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching the tip rates." } ),
      { status: 500 }
    )

  }

}