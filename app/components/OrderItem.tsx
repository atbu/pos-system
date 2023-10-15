import React from 'react'

const OrderItem = ( { name, size, price, requirements="" }: { name: string; size: string; price: string; requirements?: string }) => {
  return (
    <div>
      <li className='pl-3 inline-block'>
          - {name}
          <p className='badge badge-primary ml-2'>{size}</p>
            { requirements != "" ? <p className='badge badge-accent ml-2'>{requirements}</p> : null }
          <p className='absolute right-2'>
            {price}
          </p>
      </li>
    </div>
  )
}

export default OrderItem