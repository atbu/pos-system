import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    // The current date in Unix time.
    const currentDate = new Date(); 

    // The Unix timestamp of this time, a week ago.
    const lastWeekDate = new Date(currentDate.getTime() 
            - 7 * 24 * 60 * 60 * 1000); 

    // Returns an array of the amounts of all tips in the last week.
    const tipAmountsLastWeek = await prisma.tip.findMany({
      select: {
        amount: true,
      },
      where: {
        createdAt: {
          gt: lastWeekDate,
        }
      }
    })

    /*
    Creates a variable to store the total value of all tips from the last week.
    The array generated above is iterated through to find the total.
    */
    let tipTotalLastWeek = 0
    tipAmountsLastWeek.forEach(tip => {
      tipTotalLastWeek += Number(tip.amount)
    })
    const numberOfTipsLastWeek = tipAmountsLastWeek.length // length of array is number of tips

    // Divides the tip total by the number of tips to find the average tip amount and converts to a more readable value
    const tipAverageLastWeek = (tipTotalLastWeek / numberOfTipsLastWeek).toFixed(2)

    // The Unix timestamp of this time, a month ago.
    const lastMonthDate = new Date(currentDate.getTime()
            - 30 * 24 * 60 * 60 * 1000); 

    // Returns an array of the amounts of all tips in the last month.
    const tipAmountsLastMonth = await prisma.tip.findMany({
      select: {
        amount: true,
      },
      where: {
        createdAt: {
          gt: lastMonthDate,
        }
      }
    })
    
    /*
    Creates a variable to store the total value of all tips from the last month.
    The array generated above is iterated through to find the total.
    */
    let tipTotalLastMonth = 0
    tipAmountsLastMonth.forEach(tip => {
      tipTotalLastMonth += Number(tip.amount)
    })
    const numberOfTipsLastMonth = tipAmountsLastMonth.length

    // Divides the tip total by the number of tips to find the average tip amount and converts to a more readable value
    const tipAverageLastMonth = (tipTotalLastMonth / numberOfTipsLastMonth).toFixed(2)

    // Returns an array of the amounts of all tips from all time.
    const tipAmountsAllTime = await prisma.tip.findMany({
      select: {
        amount: true,
      },
    })

    /*
    Creates a variable to store the total value of all tips from all time.
    The array generated above is iterated through to find the total.
    */
    let tipTotalAllTime = 0
    tipAmountsAllTime.forEach(tip => {
      tipTotalAllTime += Number(tip.amount)
    })
    const numberOfTipsAllTime = tipAmountsAllTime.length

    // Divides the tip total by the number of tips to find the average tip amount and converts to a more readable value
    const tipAverageAllTime = (tipTotalAllTime / numberOfTipsAllTime).toFixed(2)

    // Returns the requested orders as JSON in a NextResponse.
    return new NextResponse(JSON.stringify({ lastWeek: tipAverageLastWeek, lastMonth: tipAverageLastMonth, allTime: tipAverageAllTime }), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching the tip averages." } ),
      { status: 500 }
    )

  }

}