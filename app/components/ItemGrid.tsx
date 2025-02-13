import React from 'react'

import Item from './Item'

/*
Gets the set of categories that belong to the active menu from the database
and returns them as converted JSON.
*/
const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/activeCategories", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

const ItemGrid = async () => {

  // Stores the categories fetched from the database in a variable.
  const categories = await getCategories()

  /*
  Defines the ItemGrid component as a Tailwind-defined grid, and maps the categories
  fetched from the database as items, passing the appropriate data through as properties
  so it can be properly displayed on the page.
  */
  return (
    <div className="grid gap-4 grid-cols-4">
      {categories.map((element) => <Item title={element.title} desc={element.desc} slug={element.slug} /> )}
    </div>
  )

}

export default ItemGrid