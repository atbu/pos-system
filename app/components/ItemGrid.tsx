import React from 'react'
import Item from './Item'

const ItemGrid = () => {
  return (
    <div className='grid gap-4'>
        <Item name="Cheeseburger" price="£8.00"></Item>
        <Item name="Fries" price="£8.00"></Item>
        <Item name="Coca-Cola" price="£8.00"></Item>
    </div>
  )
}

export default ItemGrid