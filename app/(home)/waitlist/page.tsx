'use client'

import React, { FormEvent, useState } from 'react'
import Page from '@/components/shared/Page'
import { X } from 'react-feather'
import VerifiedPage from '@/components/Waitlist/VerifiedPage'
import OTPfield from '@/components/Waitlist/Otp'
import Button from '@/components/shared/Button'
import EmailInput from '@/components/Waitlist/EmailInput'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { BiPencil } from 'react-icons/bi'

const WaitlistPage = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [showOTPForm, setShowOTPForm] = useState(false)
  const [otpErr, setOtpErr] = useState(false)
  const [err, setErr] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [k, setK] = useState(0)

  const handleVerifyOTP = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setOtpVerified(true)
  }

  const handleResendOTP = () => {
    setK((i) => i + 1)
    // setResendTimer(Date.now() + 60000)
  }

  const handleRequestOTP = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowOTPForm(true)
  }

  const renderer = ({ seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <button
          type='button'
          className="mt-2 cursor-pointer text-themeTextGrey underline"
          onClick={handleResendOTP}
        >
          Resend now
        </button>
      )
    } else {
      return (
        <span className="mt-2 text-sm text-themeTextGrey">
          Resend OTP in {seconds} seconds
        </span>
      )
    }
  }

  if (otpVerified) {
    return <VerifiedPage />
  }

  return (
    <Page className="flex items-start justify-center md:items-center ">
      <div className="relative w-fit">
        <button className="absolute right-0 top-0 -mr-0 -mt-12 hidden rounded-full bg-themeBgBlack px-2 py-2 text-white md:block">
          <X size={20} />
        </button>
        <div className="flex flex-col gap-8 rounded-3xl p-0 md:w-[440px] md:bg-themeBlack md:p-12">
          <h1 className="text-3xl font-semibold text-white">
            {showOTPForm ? 'Enter 6-digit OTP' : 'Check Your Rank'}
          </h1>
          {showOTPForm ? (
            <span className="text-sm font-light text-white opacity-50">
              Your Code Was Sent To {email}
            </span>
          ) : (
            <span className="visible text-sm font-light text-white opacity-90 md:hidden">
              Discover Where You Stand Among The Top Performers On Our
              Leaderboard Page. Check Your Rank And Celebrate Your Achievements!
            </span>
          )}
          {showOTPForm ? (
            <form onSubmit={handleVerifyOTP} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <OTPfield err={otpErr} setOtp={setOtp} otp={otp} />
                <Countdown
                  key={k}
                  renderer={renderer}
                  date={1704649455000}
                />
              </div>
              <Button
                disabled={otp.length < 6}
                className="md:w-fit !px-12"
              >
                Verify OTP
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRequestOTP} className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <EmailInput err={err} value={email} setValue={setEmail} />
                <button className="flex items-center gap-2 text-xs font-light underline opacity-50">
                  <BiPencil /> Edit Email ID
                </button>
              </div>
              <Button
                disabled={email.length === 0}
                className="md:w-fit !px-4"
              >
                Request OTP
              </Button>
            </form>
          )}
        </div>
      </div>
    </Page>
  )
}

export default WaitlistPage
