import React from 'react'

const OrderItem = ( { name, size, price, requirements="" }: { name: string; size: string; price: string; requirements?: string }) => {
  return (
    <div>
        <tr>
            <td>
                <div className='pl-3 inline-block'>
                    - {name}
                    <div className='badge badge-primary ml-2'>{size}</div>
                    { requirements != "" ? <div className='badge badge-accent ml-2'>{requirements}</div> : null }
                    <div className='absolute right-2'>
                      {price}
                    </div>
                </div>
            </td>
        </tr>
    </div>
  )
}

export default OrderItem