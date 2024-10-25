import SignUp from '@/components/Login/SignUp'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="pageHeight relative z-0 flex w-full flex-col items-center justify-center gap-2 overflow-hidden p-4">
      <div className="floating absolute -left-8 top-0 z-0 md:left-8">
        <Image
          src="/Presale/nfts (1).png"
          width={800}
          height={737}
          alt=""
          className="h-36 w-fit -rotate-12 object-contain mmd:h-48"
        />
      </div>
      <div
        className="floating absolute -right-8 bottom-0 z-0 md:bottom-8 md:right-8"
        data-delay={1000}
      >
        <Image
          src="/Presale/nfts (2).png"
          width={800}
          height={803}
          alt=""
          className="h-36 w-fit rotate-12 object-contain mmd:h-48"
        />
      </div>
      <div className="relative z-10 mb-2 text-center text-3xl font-bold md:text-5xl">
        Welcome to Cryptograd
      </div>
      <div className="z-10 mb-6 text-center text-sm font-light text-white/40">
        By clicking Sign Up you&apos;e confirming that you agree with our{' '}
        <Link href="/help/terms-and-conditions" className="underline">
          Terms and Conditions.
        </Link>
      </div>
      <SignUp />
    </div>
  )
}
