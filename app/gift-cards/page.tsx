"use client"

import React from 'react'

import { toggleGiftCardActiveState, generateGiftCard } from '../actions'
import HomeButton from '../components/HomeButton'

// Gets the set of gift cards from the database and returns them as converted JSON.
const getGiftCards = async () => {
  const res = await fetch("http://localhost:3000/api/getGiftCards", {
    cache: 'no-cache',
  })

  if(!res.ok){
    throw new Error("Failed")
  }

  return res.json()
}

/*
Grabs the data from the text input fields and maps it to variables.
If none of these variables are empty, a new gift cards should be generated with this data.
*/
const generateNew = () => {
  const cardValueElement = (document.getElementById("value") as HTMLInputElement)
  const cardValue = cardValueElement.value

  const cardNameElement = (document.getElementById("name") as HTMLInputElement)
  const cardName = cardNameElement.value

  const cardMessageElement = (document.getElementById("message") as HTMLInputElement)
  const cardMessage = cardMessageElement.value

  if(cardValue != "" && cardName != "" && cardMessage != "") {
    generateGiftCard(cardValue, cardName, cardMessage)
  } else {
    console.log("Missing parameters to generate a new gift card.")
  }
}

const GiftCards = async () => {

  // Gets the data from the API request.
  const giftCards = await getGiftCards()

  return (
    <div>

      { /* Creates a table with the data about the gift cards from the database. */}
      <div className="overflow-x-auto text-white">
        <>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Created At</th>
                <th>Value</th>
                <th>Name</th>
                <th>Message</th>
                <th>Code</th>
                <th>Active</th> 
              </tr>
            </thead>
            <tbody>
              {giftCards.map(card => <tr>
                <th>{card.id}</th>
                <td>{card.createdAt}</td>
                <td>{'£' + parseFloat(card.value).toFixed(2).toString()}</td>
                <td>{card.name}</td>
                <td>{card.message}</td>
                <td>{card.code}</td>
                {/* Allows the user to toggle gift card active/inactive state - ternary operator is effectively a shortened if statement
                 - if card is active, display 'active - click to deactivate' and if the card is inactive, display 'inactive - click to activate' */}
                <td>{card.active
                      ? <button className='btn btn-primary' onClick={() => toggleGiftCardActiveState(card.id, false)}>Active - click to deactivate</button> 
                      : <button className='btn btn-accent' onClick={() => toggleGiftCardActiveState(card.id, true)}>Inactive - click to activate</button>}
                </td>
              </tr>)}
            </tbody>
          </table>
        </>
      </div>

      {/* The actual HTML elements which allow the user to input data to create a new gift card. */}
      <div className='mt-2 ml-2'>
        <input type="number" placeholder="Value" className="input input-bordered input-sm w-full max-w-xs text-white" id="value" />
        <input type="text" placeholder="Name" className="input input-bordered input-sm w-full max-w-xs text-white" id="name" />
        <input type="text" placeholder="Message" className="input input-bordered input-sm w-full max-w-xs text-white" id="message" />
        <button className='btn btn-secondary btn-sm ml-2' onClick={() => generateNew()}>Generate New</button>
      </div>

      <HomeButton />
    </div>
  )
}

export default GiftCards