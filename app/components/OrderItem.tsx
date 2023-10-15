import React from 'react'

const OrderItem = ( { name, size, price, requirements="" }: { name: string; size: string; price: number; requirements?: string }) => {
  return (
    <div>
      <li className='pl-3 pt-1 inline-block'>
          - {name}
          <p className='badge badge-ghost ml-2'>{'£' + price.toFixed(2).toString()}</p>
          <p className='badge badge-primary ml-2'>{size}</p>
          { requirements != "" ? <p className='badge badge-accent ml-2'>{requirements}</p> : null }
      </li>
    </div>
  )
}

export default OrderItem