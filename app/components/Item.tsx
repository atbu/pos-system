'use client';
import React from 'react'

const Item = ( { name, price }: { name: string; price: number } ) => {
  function handleClick(name: string, price: number) {
    console.log(name, price)
  }
  return (
    <div>
      <button className="btn btn-outline" onClick={() => handleClick(name, price)}>
          { name } - { '£' + price.toFixed(2).toString() }
      </button>
    </div>
  )
}

export default Item