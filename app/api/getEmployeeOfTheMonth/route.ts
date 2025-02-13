import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    // The current date in Unix time.
    const currentDate = new Date(); 

    // The Unix timestamp of this time, a month ago.
    const lastMonthDate = new Date(currentDate.getTime()
            - 30 * 24 * 60 * 60 * 1000); 

    // Returns all employees' order array, PIN and full name.
    const employeeData = await prisma.user.findMany({
      select: {
        orders: true,
        pin: true,
        fullName: true,
      }
    })

    /*
    Creates an empty array.
    Iterates through all employees, and generates a total amount they have made in the last week.
    It then pushes this new data to the employeeTotals array.
    */
    let employeeTotals = []
    employeeData.forEach(employee => {
      let employeeTotal = 0
      employee.orders.forEach(order => {
        if(order.createdAt > lastMonthDate) { employeeTotal += Number(order.total) }
      })
      employeeTotals.push({ pin: employee.pin, total: employeeTotal, fullName: employee.fullName })
    })

    /*
    Compares every employee against the next. Whoever has the highest amount
    will be nominated as the 'employee of the month' and their details are
    set in the topEmployee object.
    */
    let topEmployee = { pin: "", total: 0, fullName: "" }
    employeeTotals.forEach(employee => {
      if(employee.total > topEmployee.total) {
        topEmployee.pin = employee.pin
        topEmployee.total = employee.total
        topEmployee.fullName = employee.fullName
      }
    })

    // Returns the requested employee data as JSON in a NextResponse.
    return new NextResponse(JSON.stringify(topEmployee), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching the employee of the month." } ),
      { status: 500 }
    )

  }

}