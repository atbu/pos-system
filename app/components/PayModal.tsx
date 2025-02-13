"use client"

import React from 'react'

import useStore from '../../util/store'
import { createNewOrder, deductGiftCard } from '../actions'

const PayModal = () => {
  // Allows variables/functions from the store file to be accessed by parts of this file.
  const { order, discount, clearOrder, activeUser, tip } = useStore((state) => {
    return { order: state.order, discount: state.discount, clearOrder: state.clearOrder, activeUser: state.activeUser, tip: state.tip }
  })

  // Initialises variables to allow the system to work out change.
  let paidValue = 0
  let change = ""

  /*
  Iterates through each item and adds to the subtotal.
  1. Calculates the total before tip by calculating the total after discount in string form with a £ before it.
  2. Calculates the value of the total by then calculating the total after discount and tip.
  3. Creates a total variable which is formatted in string form to be displayed to the user.
  4. Calculates the amount of tip the user has given from the percentage.
  */
  let subtotal = 0
  order.forEach(element => {
    subtotal = subtotal + parseFloat(element.price)
  })
  const totalBeforeTip = '£' + (subtotal * ((1-(discount/100)))).toFixed(2).toString()
  const totalVal = (subtotal * ((1-(discount/100)))+subtotal*(tip/100)).toFixed(2)
  const total = '£' + totalVal.toString()
  const tipAmount = (parseFloat(total.replace("£", "")) - parseFloat(totalBeforeTip.replace("£", ""))).toFixed(2)

  // Closes the main payment modal and opens the gift card modal.
  const payByGiftCard = () => {
    const modal = (document.getElementById("pay_modal") as HTMLDialogElement)
    modal.close()
    const newModal = (document.getElementById("gift_card_modal") as HTMLDialogElement)
    newModal.showModal()
  }

  // Closes the main payment modal and opens the cash modal.
  const payByCash = () => {
    const modal = (document.getElementById("pay_modal") as HTMLDialogElement)
    modal.close()
    const newModal = (document.getElementById("cash_modal") as HTMLDialogElement)
    newModal.showModal()
  }

  // Closes the main payment modal and opens the card modal.
  const payByCard = () => {
    const modal = (document.getElementById("pay_modal") as HTMLDialogElement)
    modal.close()
    const newModal = (document.getElementById("card_modal") as HTMLDialogElement)
    newModal.showModal()
  }

  // Generates an order using a gift card.
  const generateGC = (price, products) => {
    const code = (document.getElementById("code") as HTMLInputElement) // finds the gift card code inputted by the user
    createNewOrder(price, products, discount, ("Gift Card (" + code.value + ")"), activeUser, tip, tipAmount) // passes the relevant data to the createNewOrder action
    clearOrder() // clears the order
    const total = (subtotal * (1-(discount/100))).toFixed(2) // calculates the total
    deductGiftCard(code.value, total) // deducts the calculated total from the value of the gift card
    const modal = (document.getElementById("gift_card_modal") as HTMLDialogElement)
    modal.close() // closes the gift card modal
  }

  // Shows the amount of change the user is owed.
  const showChange = () => {
    const paid = (document.getElementById("amount_paid") as HTMLInputElement)
    paidValue = parseFloat(paid.value.toString())

    change = '£' + (paidValue - totalVal).toFixed(2).toString()
    const changeDueText = (document.getElementById("change_due") as HTMLElement)
    changeDueText.innerHTML = 'Change due: ' + change

    const modal = (document.getElementById("cash_modal") as HTMLDialogElement)
    modal.close()
    const newModal = (document.getElementById("cashchange_modal") as HTMLDialogElement)
    newModal.showModal()
  }

  // Generates a new order using the payment method passed as a parameter.
  const generate = (method) => {
    createNewOrder((subtotal * (1-(discount/100))).toFixed(2), order, discount, method, activeUser, tip, tipAmount)
    clearOrder()
  }

  return (
    <div>
      {/* The code for the main payment modal, including the join buttons. */}
      <dialog id="pay_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">PAY</h3>
        <p className='mt-2 mb-2 text-center'>Total: {total}</p>
        <div className="join flex flex-row justify-center items-center">
          <button className="btn join-item" onClick={() => payByCash()}>Cash</button>
          <button className="btn join-item" onClick={() => payByCard()}>Card</button>
          <button className="btn join-item" onClick={() => payByGiftCard()}>Gift Card</button>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost absolute top-2 right-2">X</button>
          </form>
        </div>
      </div>
    </dialog>

    {/* The code for the gift card modal. */}
    <dialog id="gift_card_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">GIFT CARD</h3>
        <p className='mt-2 mb-2 text-center'>Total: {total}</p>
        <div className="join flex flex-row justify-center items-center">
          <input type="text" placeholder="Code" className="input input-bordered input-sm w-full max-w-xs" id="code" />
          <button className='btn btn-secondary btn-sm ml-2' onClick={() => generateGC(subtotal, order)}>Pay</button>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost absolute top-2 right-2">X</button>
          </form>
        </div>
      </div>
    </dialog>

    {/* The code for the card modal. */}
    <dialog id="card_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">CARD</h3>
        <p className='mt-2 mb-2 text-center'>Total: {total}</p>
        <div className="join flex flex-row justify-center items-center">
          <p>Follow the instructions on the PIN pad.</p>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost absolute top-2 right-2" onClick={() => generate("Card")}>X</button>
          </form>
        </div>
      </div>
    </dialog>

{/* The code for the cash modal. */}
    <dialog id="cash_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">CASH</h3>
        <p className='mt-2 mb-2 text-center'>Total: {total}</p>
        <div className="join flex flex-row justify-center items-center">
          <p className="mb-2">The cash drawer is open.</p>
          <input type="number" placeholder="£0.00 (amount paid)" className="input input-bordered input-sm w-full max-w-xs" id="amount_paid" />
          <button className='btn btn-secondary btn-sm ml-2' onClick={() => showChange()}>Pay</button>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost absolute top-2 right-2">X</button>
          </form>
        </div>
      </div>
    </dialog>

    {/* The code for the modal which displays the amount of change the user is owed. */}
    <dialog id="cashchange_modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">CASH</h3>
        <div className="join flex flex-row justify-center items-center">
          <p id="change_due" className='mt-4'></p>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-ghost absolute top-2 right-2" onClick={() => generate("Cash")}>X</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
  )
}

export default PayModal