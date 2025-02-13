import React from 'react'
import useStore from '../../util/store'

const OrderItem = ( { title, desc, price, id } ) => {

  // Passes the deleteItem function through so it can be used within this component.
  const { deleteItem } = useStore((state) => {
    return { deleteItem: state.deleteItem }
  })

  /*
  Defines the OrderItem component - it displays the title and description passed as properties,
  as well as the (formatted) price, and a button with a trash icon which executes the
  deleteItem function to remove the item from the centrally stored order array.
  */
  return (
    <div>
      <li className='pl-3 pt-1 inline-block'>
          <div className="tooltip tooltip-right" data-tip={desc}>
            • {title}
          </div>
          <p className='badge badge-ghost ml-2'>{'£' + price.toFixed(2).toString()}</p>
          <button onClick={() => deleteItem(id)} className="align-middle absolute right-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
          </button>
      </li>
    </div>
  )
}

export default OrderItem