import React from 'react'
import OrderItem from './OrderItem'

const CurrentOrder = () => {
  return (
    <div>
        <table>
            <div className='flex flex-col space-y-1'>
                <div className='p-2'><th>Current Order</th></div>
                <OrderItem name="Cheeseburger" size="Large" price="£8.00" requirements="No Pickle"></OrderItem>
                <OrderItem name="Fries" price="£8.00" size="Medium"></OrderItem>
                <OrderItem name="Coca-Cola" price="£8.00" size="Large"></OrderItem>
            </div>
        </table>
        <div className='absolute bottom-2 right-2 left-2'>
            <button className='btn btn-secondary btn-block h-20'>PAY</button>
        </div>
    </div>
  )
}

export default CurrentOrder