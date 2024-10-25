'use client'

import { useState } from 'react'
import Button from '../shared/Button'
import ConnectAccountDialog from './ConnectAccountDialog'
import WaitlistDialog from '@/components/Login/WaitlistDialog'
import WaitlistPositonDialog from '@/components/Login/WaitlistPositionDialog'
import { usePrivy } from '@privy-io/react-auth'

export default function SignUp() {
  const [linkDialog, setLinkedDialog] = useState(false)
  const [waitlist, setWaitlist] = useState(false)
  const [positionDialog, setPositionDialog] = useState(false)
  const [position, setPosition] = useState(1)
  const { ready, authenticated, login, user, logout } = usePrivy()

  return (
    <>
      {authenticated ? (
        <Button
          onClick={() => setLinkedDialog(true)}
          className="h-12 !w-[200px]"
        >
          Sign Up
        </Button>
      ) : (
        <Button disabled={!ready} onClick={login} className="h-12 !w-[200px]">
          Login
        </Button>
      )}
      <ConnectAccountDialog
        isOpen={linkDialog}
        setIsOpen={setLinkedDialog}
        setWaitlist={setWaitlist}
        setPositionDialog={setPositionDialog}
        setPosition={setPosition}
      />
      {/*<WaitlistDialog*/}
      {/*  isOpen={waitlist}*/}
      {/*  setIsOpen={setWaitlist}*/}
      {/*  setPositionDialog={setPositionDialog}*/}
      {/*  setPosition={setPosition}*/}
      {/*/>*/}
      {/*<WaitlistPositonDialog*/}
      {/*  isOpen={positionDialog}*/}
      {/*  setIsOpen={setPositionDialog}*/}
      {/*  position={position}*/}
      {/*  setPosition={setPosition}*/}
      {/*/>*/}
    </>
  )
}
