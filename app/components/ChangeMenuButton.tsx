"use client"

import React from 'react'
import { changeActiveMenu } from '../actions'

// Gets the set of inactive menus from the database and returns them as converted JSON.
const getCategories = async () => {
  const res = await fetch("http://localhost:3000/api/inactiveMenus", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

// Changes the active menu to the one passed as a parameter and reloads the page.
const doChange = (slug) => {
  changeActiveMenu(slug)
  window.location.reload()
}

const ChangeMenuButton = async () => {

  // Stores the menus fetched from the database in a variable.
  const menus = await getCategories()

  /*
  Defines the ChangeMenuButton - a dropdown button, with list items within,
  which each execute the changeActiveMenu server action in order to change the
  active menu to their corresponding menu.
  */
  return (
    <div>
      <div className="dropdown dropdown-top join-item">
        <div tabIndex={0} role="button" className="btn btn-neutral join-item">Change Menu</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            {menus.map((menu) => 
              <li key={menu.id}><a onClick={() => {doChange(menu.slug)}}>{menu.title}</a></li>
            )}
        </ul>
      </div>

    </div>
  )
}

export default ChangeMenuButton