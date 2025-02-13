"use client"

import React from 'react'
import useStore from '../../util/store'

// A function which takes a user PIN as a function and carries out an API request to determine whether the user exists or not (returned in JSON format).
const getDoesUserExist = async (pin: string) => {
  const res = await fetch(`http://localhost:3000/api/getDoesUserExist/${pin}`, {
    cache: "no-store"
  })

  if(!res.ok){
    throw new Error("Failed!")
  }

  return res.json()
}

const ChangeUserButton = () => {
  // References the activeUser value and the setActiveUser function so that the activeUser variable can be both read and modified.
  const { activeUser, setActiveUser } = useStore((state) => {
    return { activeUser: state.activeUser, setActiveUser: state.setActiveUser }
  })

  // Checks whether the user exists - if they do, set the active user to this user.
  const submitNewUser = async (pin) => {
    const doesUserExist = await getDoesUserExist(pin)
    if(doesUserExist){ setActiveUser(pin) }
  }

  /*
  Creates a dropdown menu (opens upwards) allowing the user to change the active user.
  The text box has the ID 'newUser' which means that it can be accessed by other parts of the code and read.
  */
  return (
    <div>
      <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn btn-neutral mb-1 join-item">Change User (currently {activeUser == "" ? "not logged in" : activeUser})</div>
          <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <input type="text" placeholder="Input user PIN here" className="input input-bordered input-sm w-full max-w-xs" id="newUser" />
            <button className='btn mb-1 mt-2' onClick={() => submitNewUser((document.getElementById("newUser") as HTMLInputElement).value)}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default ChangeUserButton