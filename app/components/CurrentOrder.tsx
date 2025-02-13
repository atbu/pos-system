'use client'

import React from 'react'
import OrderItem from './OrderItem'

import useStore from '../../util/store'
import { createNewOrder } from '../actions'

const CurrentOrder = () => {

  /*
  Passes through the order array, the discount array, the clearOrder function and the updateDiscountPercentage function since these are needed by
  functionality of this component.
  */
  const { order, discount, clearOrder, updateDiscountPercentage, activeUser, tip, updateTipPercentage } = useStore((state) => {
    return {
      order: state.order,
      discount: state.discount,
      clearOrder: state.clearOrder,
      updateDiscountPercentage: state.updateDiscountPercentage,
      activeUser: state.activeUser,
      tip: state.tip,
      updateTipPercentage: state.updateTipPercentage
    }
  })

  // Calculates the order's total price by adding the price of each individual item to an orderPrice variable.
  let orderPrice = 0
  order.forEach(element => {
    orderPrice = orderPrice + parseFloat(element.price)
  })

  const submitDiscountPercentage = (val) => {
    const validatedPercentage = validateDiscountPercentage(val)
    updateDiscountPercentage(validatedPercentage)
    const element = (document.getElementById("discount-percentage") as HTMLInputElement)
    element.value = validatedPercentage.toString()
  }

  const validateDiscountPercentage = (val) => {
    if(val == null) {
      return 0
    } else {
      if(val > 100) {
        return 100
      } else if(val < 0) {
        return 0
      } else {
        return val
      }
    }
  }

  const submitTipPercentage = (val) => {
    const validatedTip = validateTipPercentage(val)
    updateTipPercentage(validatedTip)
    const element = (document.getElementById("tip-percentage") as HTMLInputElement)
    element.value = validatedTip.toString()
  }

  const validateTipPercentage = (val) => {
    if(val == null) {
      return 0
    } else {
      if(val > 100) {
        return 100
      } else if(val < 0) {
        return 0
      } else {
        return val
      }
    }
  }

  const total = (orderPrice * ((1-(discount/100)))+orderPrice*(tip/100)).toFixed(2).toString()

  const showPayModal = () => {
    if(orderPrice != 0 && activeUser != "") {
      if(discount == 100) {
        createNewOrder(orderPrice, order, discount, "N/A", activeUser, 0, 0)
        clearOrder()
      } else {
        const modal = (document.getElementById("pay_modal") as HTMLDialogElement)
        modal.showModal()
      }
    }
  }
  
  return (
    <div>
      <div>

        <ul>

          {/* Maps each item in the order to an OrderItem component and passes its properties to the component so they can be displayed. */}
          {order.map((item) => <OrderItem title={item.title} desc={item.desc} price={parseFloat(item.price)} id={item.id} /> )}

        </ul>

        <div className='absolute bottom-2 right-2 left-2'>

            {/* Creates a button, that executes the clearOrder() function when clicked. */}
            <button className='btn btn-accent mb-1' onClick={() => clearOrder()}>Void Transaction</button>

            {/* Code for the discount dropdown with its text box and submit/clear buttons. */}
            <div className="dropdown dropdown-top">
              <div tabIndex={0} role="button" className="btn mb-1">Discount ({discount}%)</div>
              <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <input type="number" placeholder="Input discount percentage here" className="input input-bordered input-sm w-full max-w-xs" id="discount-percentage" />
                <button className='btn mb-1 mt-2' onClick={() => submitDiscountPercentage(parseFloat((document.getElementById("discount-percentage") as HTMLInputElement).value))}>Submit</button>
                <button className='btn mb-2' onClick={() => submitDiscountPercentage(0)}>Clear</button>
              </div>
            </div>

            {/* Code for the tip dropdown with its text box and submit/clear buttons. */}
            <div className="dropdown dropdown-top">
              <div tabIndex={0} role="button" className="btn mb-1">Tip ({tip}%)</div>
              <div tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <input type="number" placeholder="Input tip percentage here" className="input input-bordered input-sm w-full max-w-xs" id="tip-percentage" />
                <button className='btn mb-1 mt-2' onClick={() => submitTipPercentage(parseFloat((document.getElementById("tip-percentage") as HTMLInputElement).value))}>Submit</button>
                <button className='btn mb-2' onClick={() => submitTipPercentage(0)}>Clear</button>
              </div>
            </div>

            {/* A button intended to create orders. It displays the order's total price within itself and executes the generate() function,
            passing the order's details as parameters. */}
            <button className='btn btn-secondary btn-block h-20' onClick={() => showPayModal()}>PAY ({'£' + total.toString()})</button>

        </div>
        
      </div>
    </div>
  )

}

export default CurrentOrder