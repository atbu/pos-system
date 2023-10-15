import React from 'react'
import OrderItem from './OrderItem'

let orderItems = [{
  name: 'test',
  price: 8,
  size: 'test'
}];

function addItemToOrder(name: string, price: number, size: string){
  orderItems.push({name, price, size});
}

const CurrentOrder = () => {
  return (
    <div>
      <>
        {orderItems.map(item => (
          <OrderItem name={item.name} price={item.price} size={item.size}></OrderItem>
        ))}
      </>
      <div>
        <div className='absolute bottom-2 right-2 left-2'>
            <button className='btn btn-secondary btn-block h-20'>PAY</button>
        </div>
      </div>
    </div>
  )
}

export default CurrentOrder