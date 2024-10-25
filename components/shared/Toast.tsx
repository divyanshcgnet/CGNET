'use client'

import { ReactNode, useState } from 'react'
import copy from 'copy-to-clipboard'

export default function Toast({
  children,
  disabled,
  refId,
  className,
}: {
  children: ReactNode
  disabled: boolean
  refId: string
  className?: string
}) {
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const handleButtonClick = () => {
    setIsAlertVisible(true)
    // navigator.clipboard.writeText(
    //   `${window.location.origin}/?ref=${referralId}`
    // );
    copy(`${window.location.origin}?ref=${refId}`)
    setTimeout(() => {
      setIsAlertVisible(false)
    }, 3000)
  }
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={className}
        disabled={disabled}
      >
        {children}
      </button>
      {isAlertVisible && (
        <div className="fixed bottom-16 left-0 right-0 z-10 mx-auto w-fit rounded-lg bg-themeGrey px-3 py-2 text-sm font-semibold transition-all">
          Copied
        </div>
      )}
    </>
  )
}
