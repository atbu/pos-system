import React from 'react'
import OrderItem from './OrderItem'

const CurrentOrder = () => {
  return (
    <div>
      <ul>
        <OrderItem name="Cheeseburger" size="Large" price="£8.00" requirements="No Pickle"></OrderItem>
        <OrderItem name="Fries" price="£8.00" size="Medium"></OrderItem>
        <OrderItem name="Coca-Cola" price="£8.00" size="Large"></OrderItem>
      </ul>
      <div className='absolute bottom-2 right-2 left-2'>
          <button className='btn btn-secondary btn-block h-20'>PAY</button>
      </div>
    </div>
  )
}

export default CurrentOrder