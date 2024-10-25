'use client'

import Button from '../shared/Button'
import { ChangeEvent, FormEvent, useState } from 'react'
import WaitlistDialogJoin from '../Homepage/WaitlistDialogJoin'
import WaitlistDialogRank from '../Homepage/WaitlistDialogRank'
import { useRouter } from 'next/navigation'

const JoinTheBeta = ({ buttonText }: { buttonText?: string }) => {
  const [openJoin, setOpenJoin] = useState(false)
  const [openRank, setOpenRank] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
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
      {/* <Button onClick={() => setOpenJoin(true)} className='!h-12 min-h-[2.5rem]'>Join the Beta</Button> */}
      <Button onClick={() => router.push('/presale')} className="!h-12 min-h-[2.5rem]">
        {buttonText ? buttonText : 'Get Started'}
      </Button>
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

export default JoinTheBeta
