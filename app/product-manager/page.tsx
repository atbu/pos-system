"use client"

import React from 'react'
import HomeButton from '../components/HomeButton';
import { pushStockChange } from '../actions';

// Get all products from the database.
const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/getAllProducts`, {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const ProductManager = async () => {

  // Stores the products fetched from the database in a variable.
  const products = await getData()

  // Pushes the changes for each item to the database.
  const pushChanges = () => {
    products.forEach(product => {
      const id = product.id
      const stock = Number((document.getElementById(id + "-stock") as HTMLInputElement).value)
      const onOrder = Number((document.getElementById(id + "-onOrder") as HTMLInputElement).value)
      pushStockChange(id, stock, onOrder)
    })
    const modal = document.getElementById("push_modal") as HTMLDialogElement
    modal.close()
  }

  // Creates an array of items with stock warnings.
  const stockWarnings = []
  products.forEach(product => {
    if(product.stock == 0 && product.onOrder == 0) {
      stockWarnings.push(product.id)
    }
  })
  const amountStockWarnings = stockWarnings.length

  // Allows the user to toggle the red background for items with stock warnings.
  const toggleWarnings = () => {
    stockWarnings.forEach(product => {
      if(document.getElementById(product + "-row").className == "") {
        document.getElementById(product + "-row").className = "bg-red-900"
      } else {
        document.getElementById(product + "-row").className = ""
      }
    })
  }

  return (
    <div className='text-white'>

      <dialog id="push_modal" className="modal">
        <div className="modal-box">
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg text-center">PUSH</h3>
            <br />
            <p className='mt-2 mb-2 text-center'>Are you sure you want to push the changes to the database?<br />This cannot be undone.</p>
            <br />
            <button className="btn btn-success" onClick={() => {pushChanges()}}>CONFIRM</button>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost absolute top-2 right-2">X</button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto">
        <button className="btn btn-accent m-2" onClick={() => (document.getElementById("push_modal") as HTMLDialogElement).showModal()}>PUSH CHANGES TO DATABASE</button>
        <button className="btn btn-warning" onClick={() => {toggleWarnings()}}>
          STOCK WARNINGS
          <div className="badge">{amountStockWarnings}</div>
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Current Stock</th>
              <th>Stock on Order</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => <tr id={product.id + "-row"}>
              <th>{product.id}</th>
              <td>{product.title}</td>
              <td>{product.desc}</td>
              <td>{'£' + parseFloat(product.price).toFixed(2).toString()}</td>
              <td>{product.catSlug}</td>
              <td><input className="border border-gray-600 w-12" type="number" id={product.id.toString() + '-stock'} defaultValue={product.stock} /></td>
              <td><input className="border border-gray-600 w-12" type="number" id={product.id.toString() + '-onOrder'} defaultValue={product.onOrder} /></td>
            </tr>)}
          </tbody>
        </table>
      </div>

      <HomeButton />
      
    </div>
  )

}

export default ProductManager