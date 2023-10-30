'use client';

import React from 'react'
import { useState } from 'react'
import OrderItem from './OrderItem'
import ItemGrid from './ItemGrid'
import { useRouter } from 'next/navigation';

import prisma from '../../lib/prisma'
import { Item, Size, Prisma } from '@prisma/client'

const orderArray = [];

const CurrentOrder = () => {
  const [currentOrder, setCurrentOrder] = useState(orderArray);

  const handleAddItem = () => {
    setCurrentOrder((prevOrder) => [
      ...prevOrder,
      <OrderItem name="test1" price={7} size="Medium"></OrderItem>
    ])
  }
    
  const router = useRouter();
  const create = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch(`/api/orderItem`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json", },
    });

    router.refresh();
  }

  

  return (
    <div>
      <div className='absolute top-5 left-5'>
        <ItemGrid />
      </div>
      <div>
        <ul>
          {currentOrder.map(item => item)}
        </ul>
        <button className='button button-ghost' onClick={handleAddItem}>Hello</button>
        <div className='absolute bottom-2 right-2 left-2'>
            <button className='btn btn-secondary btn-block h-20' onClick={create}>PAY</button>
        </div>
      </div>
    </div>
  )
}

export default CurrentOrder