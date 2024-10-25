import Logout from '@/components/shared/Logout'
import Image from 'next/image'
import { CgSpinner } from 'react-icons/cg'

export default function LogoutPage() {
  return (
    <div className="fixedHeightMob relative flex h-screen flex-col items-center justify-center overflow-hidden">
      <Image
        src="/effects/ellipse-1.svg"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        alt=""
        width={435}
        height={640}
      />
      <CgSpinner className="relative z-1 animate-spin text-9xl text-themeBorderBlue" />
      <Logout />
    </div>
  )
}
