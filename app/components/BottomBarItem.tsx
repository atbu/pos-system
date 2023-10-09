import React from 'react'
import Link from 'next/link'

const BottomBarItem = ({ text, route }: { text: string; route: string}) => {
  return (
    <div>
        <Link href={'/' + route}>
            <button className='btn btn-neutral'>{text}</button>
        </Link>
    </div>
  )
}

export default BottomBarItem