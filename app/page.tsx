import React from 'react'

import BottomBar from './components/BottomBar'
import CurrentOrder from './components/CurrentOrder'
import ItemGrid from './components/ItemGrid'
import PayModal from './components/PayModal'

export default function Home() {

  // This creates the three main components of the main page.
  return (
    <main>
      <div className='text-white'>
        <div className='absolute bottom-5 left-5'>
          <BottomBar />
        </div>
        <div className='absolute inset-y-0 right-0 w-1/3 h-screen-max border-l-2 border-black'>
          <CurrentOrder />
        </div>
        <div className='absolute top-5 left-5'>
          <ItemGrid />
        </div>
        <div>
          <PayModal />
        </div>
      </div>
    </main>
  )

}