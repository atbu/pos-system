import React from 'react'
import BottomBarLink from './BottomBarLink'
import ChangeMenuButton from './ChangeMenuButton'
import ChangeUserButton from './ChangeUserButton'

const BottomBar = () => {

  /*
  A set of BottomBarLink components which correspond to the buttons at the bottom of the page.
  They act as a join group, horizontally, meaning they display as a horizontal bar at the bottom of the page.

  Each of the BottomBarLink(s) takes in 'text' as a property, which is the text that should be
  contained within each button, and the 'route', which is the data that should be added to the URL
  to get to the destination.

  The ChangeMenuButton has its own component since it acts in a significantly different way to
  the others - it makes more sense that way.
  */
  return (
    <div className='join join-horizontal' role='group'>
        <ChangeMenuButton />
        <ChangeUserButton />
        <BottomBarLink text="Kitchen Mode" route='kitchen' />
        <BottomBarLink text="Transaction Log" route="transaction-log" />
        <BottomBarLink text="Manage Gift Cards" route="gift-cards" />
        <BottomBarLink text="Product Manager" route="product-manager" />
        <BottomBarLink text="Statistics" route="statistics" />
    </div>
  )
}

export default BottomBar