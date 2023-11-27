import React from 'react'
import prisma from '../../lib/prisma'

const page = async () => {

  const orders = await getOrders();
  const orders2 = JSON.parse(JSON.stringify(orders))

  return (
    
    <div>
        {orders2.map(order => (
            <p key={order.orderId}>{order.orderId}

            {order.items.map(item => (
              <p key={item.orderItemId}>{item.orderItemId} {item.item} {item.size} {item.price}</p>
            ))} 

            {order.status}</p>
        ))}
    </div>
  )
}

async function getOrders(){
    const orders = await prisma.order.findMany( { include: { items: true }, });
    return orders;
}

export default page