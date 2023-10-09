import React from 'react'
import OrderItem from './OrderItem'

const CurrentOrder = () => {
  return (
    <div>
        <table>
            <div className='flex flex-col space-y-1'>
                <div className='p-2'><th>Current Order</th></div>
                <OrderItem name="Cheeseburger" size="Large" requirements="No Pickle"></OrderItem>
                <OrderItem name="Fries" size="Medium"></OrderItem>
                <OrderItem name="Coca-Cola" size="Large"></OrderItem>
            </div>
        </table>
    </div>
  )
}

export default CurrentOrder