import React from 'react'

const OrderItem = ( { name, size }: { name: string; size: string }) => {
  return (
    <div>
        <tr>
            <td>
                <div className='pl-3'>
                    - {name}
                    <div className='badge badge-primary ml-2'>{size}</div>
                </div>
            </td>
        </tr>
    </div>
  )
}

export default OrderItem