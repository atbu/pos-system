import React from 'react'

const Item = ( { name, price }: { name: string; price: string} ) => {
  return (
    <div>
      <button className="btn btn-outline">
          { name } - { price }
      </button>
    </div>
  )
}

export default Item