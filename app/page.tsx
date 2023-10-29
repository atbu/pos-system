import {useState} from 'react'
import BottomBar from "./components/BottomBar"
import CurrentOrder from "./components/CurrentOrder"
import ItemGrid from './components/ItemGrid'

export default function Home() {
  return (
    <main>
      <div className='bg-blue-400'>
        <div className='absolute bottom-5 left-5'>
          <BottomBar />
        </div>
        <div className='absolute inset-y-0 right-0 w-1/3 h-screen-max border-l-2 border-black'>
          <CurrentOrder />
        </div>
      </div>
    </main>
  )
}
