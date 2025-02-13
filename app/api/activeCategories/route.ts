import prisma from '../../../util/prisma'
import { NextResponse } from 'next/server'

export const GET = async () => {

  try {

    /*
    Creates a Prisma request to find the menu with the 'active' flag.
    findMany() is used because 'active' isn't a unique field, due to the fact
    that Booleans only have two possible values, meaning there would only be a
    maximum of two menus, which isn't feasible or practical.
    */
    const slugRequest = await prisma.menu.findMany({
      where: {
        active: true,
      },
      select: {
        slug: true,
      }
    })

    // Actually assigns the slug from the request to a variable.
    const slug = slugRequest[0].slug

    /* 
    Creates a Prisma request to find the categories that correspond to the
    menu slug requested before.
    */
    const categoriesRequest = await prisma.category.findMany({
      where: {
        menuSlug: slug,
      }
    })

    // Returns the requested categories as JSON in a NextResponse.
    return new NextResponse(JSON.stringify(categoriesRequest), { status: 200 })

  } catch (err) {

    // Catches any theoretical errors and returns a NextResponse with an error message.
    console.log(err)
    return new NextResponse(
      JSON.stringify( { message: "Something went wrong while fetching the active menu." } ),
      { status: 500 }
    )

  }

}