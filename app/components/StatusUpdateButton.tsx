"use client"

import React from 'react'

import { updateOrderStatus } from '../actions'

const doStatusUpdate = (id, status) => {
  updateOrderStatus(id, status)
  window.location.reload()
}

const StatusUpdateButton = ({ id, status }) => {
  /*
  Defines the StatusUpdateButton component - it is a list item
  with an anchor (link) inside it, which, when clicked, executes the
  server action to update the order status with the corresponding ID and status.
  */
  return (
    <li><a onClick={() => {doStatusUpdate(id, status)}}>Update to {status}</a></li>
  )
}

export default StatusUpdateButton