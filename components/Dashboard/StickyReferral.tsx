'use client'

import { useEffect, useState } from 'react'
import Toast from '../shared/Toast'
import { useSearchParams } from 'next/navigation'

export default function StickyReferral() {
  const [referralId, setReferralId] = useState<string | null>()
  const search = useSearchParams()

  useEffect(() => {
    setReferralId(localStorage.getItem('referralId'))
  }, [])
  return (
    search.get('tab') === 'refer' && (
      <div className="sticky bottom-0 left-0 right-0 flex w-full flex-col justify-between md:gap-4 gap-2 bg-themeNavBlack p-4 md:flex-row">
        <div className="text-lg font-semibold md:text-xl">
          Refer a friend and earn upto <br />{' '}
          <span className="text-themeBorderBlue">15% comission</span>
        </div>
        <Toast
          refId={referralId!}
          disabled={referralId ? false : true}
          className="flex md:h-12 min-h-[2.5rem] w-fit items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg text-sm font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6 md:text-base"
        >
          Invite a Friend
        </Toast>
      </div>
    )
  )
}
