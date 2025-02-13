import React from 'react'
import HomeButton from '../components/HomeButton';

// Get all orders from the database.
const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/getAllOrders`, {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

/*
Converts a set of products into an array of list items which can be displayed, including
the title of each product, as well as its price which is formatted.

The array of list items is returned.
*/
const convertToLis = (products) => {
  const productsArray = products.map(product => <li>• {product.title} ({'£' + parseFloat(product.price).toFixed(2).toString()})</li>)
  return productsArray
}

const TransactionLog = async () => {

  // Stores the orders fetched from the database in a variable.
  const orders = await getData()

  /*
  Creates a table displaying the order data fetched from the database.

  Headings are created first, to make it clear what data is, and then
  the individual orders are iterated through to create a <th> element (bold)
  containing the order ID, and then regular cells containing the other data,
  like creation date and price.
  */
  return (

    <div className='text-white'>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Created At</th>
              <th>Sub-Total</th>
              <th>Total</th>
              <th>Discount (%)</th>
              <th>Tip (£)</th>
              <th>Products</th>
              <th>Status</th>
              <th>Method of Payment</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => <tr>
              <th>{order.id}</th>
              <td>{order.createdAt}</td>
              <td>{'£' + parseFloat(order.subtotal).toFixed(2).toString()}</td>
              <td>{'£' + parseFloat(order.total).toFixed(2).toString()}</td>
              <td>{order.discount}%</td>
              <td>{order.tips.map(tip => <p>£{parseFloat(tip.amount).toFixed(2).toString()}</p>)}</td>
              <td><ul>{convertToLis(order.products)}</ul></td>
              <td>{order.status}</td>
              <td>{order.mop}</td>
              <td>{order.userPin}</td>
            </tr>)}
          </tbody>
        </table>
      </div>

      <HomeButton />
    </div>

  )

}

export default TransactionLog