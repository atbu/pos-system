"use client"

import React from 'react'

import useStore from '../../util/store'

const CategoryListItem = ({ product }) => {

  // The 'addItem' function from the store file (Zustand) is passed through so it can be used here.
  const addItem = useStore((state) => state.addItem)

  let textAdd = ""
  let classAdd = ""
  if(product.stock <= 0) {
    textAdd = " (0 in stock"
    classAdd = "link-accent btn-disabled"
    if(product.onOrder > 0) {
      textAdd += " but " + product.onOrder + " on order"
    } else {
      textAdd += " and none on order"
    }
    textAdd += ")"
  }

  /*
  This is the definition of the CategoryListItem - a list item with an anchor (link) within,
  which executes the addItem function, in order to add to the order array, when clicked.
  */
  return (
    <div>
      <li>
        <a className={classAdd} onClick={() => addItem(product.title, product.desc, product.price, product.id)}>
          {product.title} {'(£' + parseFloat(product.price).toFixed(2).toString() + ')' + textAdd}
        </a>
      </li>
    </div>
  )

}

export default CategoryListItem