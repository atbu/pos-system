'use client';
import React from 'react'
import { Size } from '@prisma/client'

const Item = ( { name }: { name: string } ) => {
  function handleClick(name: string, price: number, size: string) {
    console.log(name, price, size)
  }
  return (
    <div>
      <div className="border p-2">
          { name }<br />
          <div className='join'>
            <button className='btn btn-secondary btn-outline btn-sm m-1 join-item' onClick={() => {handleClick(name, 1, Size.SMALL.toString())}}>{Size.SMALL[0]}</button>
            <button className='btn btn-secondary btn-outline btn-sm m-1 join-item' onClick={() => {handleClick(name, 2, Size.MEDIUM.toString())}}>{Size.MEDIUM[0]}</button>
            <button className='btn btn-secondary btn-outline btn-sm m-1 join-item' onClick={() => {handleClick(name, 3, Size.LARGE.toString())}}>{Size.LARGE[0]}</button>
          </div>
      </div>
    </div>
  )
}

export default Item