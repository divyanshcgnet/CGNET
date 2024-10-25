'use client'

import { ButtonType } from '@/types/buttton'
import Button from '../shared/Button'
import { ChangeEvent, FormEvent, useState } from 'react'
import WaitlistDialogJoin from './WaitlistDialogJoin'
import WaitlistDialogRank from './WaitlistDialogRank'

const WaitlistActions = () => {
  const [openJoin, setOpenJoin] = useState(false)
  const [openRank, setOpenRank] = useState(false)
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    otp: '',
    referral: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInfo({
      ...info,
      [name]: value,
    })
  }

  const nextFn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOpenJoin(false)
    setOpenRank(true)
  }

  return (
    <>
      <div className="flex gap-4 py-8">
        <Button onClick={() => setOpenJoin(true)}>Join the Beta</Button>
        <Button type={ButtonType.SECONDARY}>Check Your Rank</Button>
      </div>
      <WaitlistDialogJoin
        isOpen={openJoin}
        setIsOpen={setOpenJoin}
        next={nextFn}
        info={info}
        handleChange={handleChange}
        loading={loading}
      />
      <WaitlistDialogRank isOpen={openRank} setIsOpen={setOpenRank} />
    </>
  )
}

export default WaitlistActions
