import React from 'react'
import OrderItem from './OrderItem'

const CurrentOrder = () => {
  return (
    <div>
      <ul className='pt-1'>
        <OrderItem name="Cheeseburger" size="Large" price={8} requirements="No Pickle"></OrderItem>
        <OrderItem name="Fries" price={8} size="Medium"></OrderItem>
        <OrderItem name="Coca-Cola" price={8} size="Large"></OrderItem>
      </ul>
      <div className='absolute bottom-2 right-2 left-2'>
          <button className='btn btn-secondary btn-block h-20'>PAY</button>
      </div>
    </div>
  )
}

export default CurrentOrder