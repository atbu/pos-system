import React from 'react'
import OrderItem from './OrderItem'

const CurrentOrder = () => {
  return (
    <table>
        <div className='p-2 border border-b-1'><th>Current Order</th></div>
        <OrderItem name="Cheeseburger" size="Large"></OrderItem>
    </table>
  )
}

export default CurrentOrder