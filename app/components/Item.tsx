import React from 'react'

const Item = ( { name, price }: { name: string; price: string}) => {
  return (
    <div className='border-2 border-black'>
        { name } - { price }
    </div>
  )
}

export default Item