import React, { useEffect } from 'react'
import { v4 } from 'uuid'
import StatusUpdateButton from '../components/StatusUpdateButton'
import HomeButton from '../components/HomeButton'

import dynamic from 'next/dynamic'
 
const KDSTimer = dynamic(() => import('../components/KDSTimer'), { ssr: false }) // ensures the time is not cached and is therefore kept up to date

// Gets any non-completed orders from the database and returns them as converted JSON.
const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/getActiveOrders`, {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

/*
  The currentStatus is passed as a parameter.
  This function takes all the possible statuses and filters out
  the one that has been passed in, leaving the inactive statuses.
  These are then returned.
*/
const getStatusOptions = (currentStatus) => {
  const statuses = ["New", "In Progress", "Ready", "Completed"]
  const filteredStatuses = statuses.filter((item) => item !== currentStatus)
  return filteredStatuses
}

// Returns the badge type that should be returned for the status passed as a parameter.
const getBadgeType = (status) => {
  if(status == "New") {
    return "badge-error"
  } else if(status == "In Progress") {
    return "badge-warning"
  } else if(status == "Ready") {
    return "badge-success"
  }
}

const KitchenMode = async () => {

  // Gets the orders from the API request.
  let orders = await getData()

  /*
  Creates a Tailwind defined grid.
  Checks if there are any orders. If there aren't, display a message saying so.
  Creates a card for each order - displays, the ID, time since creation (and creation date/time
  when hovered over). Also displays the status of the order - when this is clicked on
  a dropdown appears containing multiple StatusUpdateButton(s) which, when clicked,
  change the status of the order to the one that is clicked.

  The products are also iterated through, creating a bullet point list of each product in the order.
  */
  return (
    <div>
      <div className="grid gap-4 grid-cols-6 m-7 text-white">
        {orders.length === 0 ? <p className='mt-2 ml-2'>No active orders found.</p> : orders.map(order => 
          <>
            <div className="card shadow-xl">
              <div className="card-body">
                <div className="card-title" key={order.id}>
                  ID: {order.id}
                  <div className="tooltip" data-tip={"Created at " + order.createdAt.toString() + "."}>
                    <div className="badge badge-neutral"><><KDSTimer createdAt={order.createdAt} /></></div>
                  </div>
                  
                  <div className="dropdown" id={"dropdown-"+order.id}>
                    <div className={"badge " + getBadgeType(order.status)} tabIndex={0} role="button">{order.status}</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 font-normal">
                      {getStatusOptions(order.status).map(status => <StatusUpdateButton id={order.id} status={status}></StatusUpdateButton>)}
                    </ul>
                  </div>
                </div>
                <div>{order.products.map(product => <p key={v4()}>• {product.title}</p>)}</div> {/* Maps each product to a bullet pointed list item */}
              </div>
            </div> 
          </>
        )}
      </div>
      <HomeButton />
    </div>
  )
}

export default KitchenMode