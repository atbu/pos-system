import React from 'react'
import Link from 'next/link'

const BottomBarItem = ({ text, route }: { text: string; route: string}) => {

  /*
  This is the definition of the BottomBarItem component - it creates a link using the route passed as a property,
  and acts as a join item (Tailwind definition) as well as displaying the text, also passed as a property.
  */
  return (
    <div>
        <Link href={'/' + route}>
            <button className='btn btn-neutral join-item'>{text}</button>
        </Link>
    </div>
  )

}

export default BottomBarItem