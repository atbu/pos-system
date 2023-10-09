import React from 'react'
import BottomBarItem from './BottomBarItem'

const BottomBar = () => {
  return (
    <div className='join join-horizontal'>
        <BottomBarItem text="Log Out" route=''></BottomBarItem>
        <BottomBarItem text="Change Menu (to Dinner)" route=''></BottomBarItem>
        <BottomBarItem text="Transaction Log" route=''></BottomBarItem>
        <BottomBarItem text="Settings" route="settings"></BottomBarItem>
    </div>
  )
}

export default BottomBar