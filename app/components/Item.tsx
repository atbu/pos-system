import React from 'react'
import CategoryListItem from './CategoryListItem';

// Gets the products from the specified category using the slug provided and returns them as converted JSON.
const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/getProductsFromCategory/${slug}`, {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const Item = async ( props: { title: string, desc: string, slug: string } ) => {

  // Stores the products fetched from the database in a variable.
  const products = await getData(props.slug)

  /*
  Creates a card for each category, with a button labelled 'Open' that opens a dropdown menu
  containing CategoryListItems, which correspond to each item in each category.
  */
  return (
    <div>
      <div className="card w-96 border border-neutral-600">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.desc}</p>
          <div className="card-actions justify-end">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">Open</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {products.map((product) => <CategoryListItem product={product} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Item