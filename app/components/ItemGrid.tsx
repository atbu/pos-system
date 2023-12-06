import React from 'react'
import Item from './Item'

const ItemGrid = () => {
  return (
    <div className='grid gap-4'>
        <Item name="CHEESEBURGER"></Item>
        <Item name="FRIES"></Item>
    </div>
  )
}

export default ItemGrid