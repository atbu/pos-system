import React from 'react'
import BottomBarItem from './BottomBarItem'

const BottomBar = () => {
  return (
    <div className='join join-horizontal' role='group'>
        <BottomBarItem text="Log Out" route=''></BottomBarItem>
        <BottomBarItem text="Change Menu (to Dinner)" route=''></BottomBarItem>
        <BottomBarItem text="Kitchen Mode" route='kitchen'></BottomBarItem>
        <BottomBarItem text="Transaction Log" route="transaction-log"></BottomBarItem>
        <BottomBarItem text="Settings" route="settings"></BottomBarItem>
    </div>
  )
}

export default BottomBar