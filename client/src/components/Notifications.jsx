import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { SocketContext } from '../socketContext'

const Notifications = () => {
  const {asnwerCall, call, callAccepted} = useContext(SocketContext)
  return (
    <div>Notifications</div>
  )
}

export default Notifications