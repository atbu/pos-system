import React from 'react'
import prisma from '../../lib/prisma'

async function getOrders(){
    const orders = await prisma.order.findMany( { include: { items: true }, orderBy: { orderCreated: 'asc', }, }, );
    return orders;
}

function KDItemBadge( { status } ) {
    let badge;
    if(status == "NEW") {
        badge = <div className="dropdown"><span role='button' tabIndex={0} className="badge badge-lg badge-accent">New</span></div>
    } else if(status == "IN_PROGRESS") {
        badge = <span className="badge badge-lg badge-secondary">In Progress</span>
    } else if(status == "READY") {
        badge = <span className="badge badge-lg badge-primary">Ready</span>
    } else if(status == "COMPLETED") {
        badge = <span className="badge badge-lg badge-neutral">Completed</span>
    }
    return badge;
}

function timeToDisplay(orderCreated: Date) {
    const orderCreatedAsUnix = Math.floor(Date.parse(orderCreated.toString()) / 1000);
    const secondsSince = Math.floor(Date.now() / 1000) - orderCreatedAsUnix;

    const m = Math.floor(secondsSince % 3600 / 60).toString().padStart(2,'0')
    const s = Math.floor(secondsSince % 60).toString().padStart(2,'0');
    
    return m + ':' + s;
}

const KitchenMode = async () => {

  const orders = await getOrders();
  const orders2 = JSON.parse(JSON.stringify(orders));

  return (
    <div>
        <div className='join join-vertical w-full'>
            {orders2.length === 0 ? <p className='mt-2 ml-2'>No active orders found.</p> : orders2.map(order => (
                <>
                    <div tabIndex={0} className="collapse collapse-arrow join-item">
                        <input type="radio" name='kitchen-accordion' />
                        <div className="collapse-title text-xl font-medium">
                            {'ID: ' + order.orderId} <KDItemBadge status={order.status}></KDItemBadge> {order.status != "COMPLETED" ? <span className='badge badge-lg'>{timeToDisplay(order.orderCreated)}</span> : null}
                        </div>
                        <div className="collapse-content">
                            <ul>
                                {order.items.map(item => (
                                    <li key={item.orderItemId + 'price'}>{item.item} ({item.size}) ({'£' + item.price.toFixed(2)})</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default KitchenMode