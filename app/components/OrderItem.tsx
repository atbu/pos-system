import React from 'react'

const OrderItem = ( { name, size, requirements="" }: { name: string; size: string; requirements?: string }) => {
  return (
    <div>
        <tr>
            <td>
                <div className='pl-3'>
                    - {name}
                    <div className='badge badge-primary ml-2'>{size}</div>
                    { requirements != "" ? <div className='badge badge-accent ml-2'>{requirements}</div> : null }
                </div>
            </td>
        </tr>
    </div>
  )
}

export default OrderItem