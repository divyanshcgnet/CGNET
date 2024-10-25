import Swap from '@/components/Swap/Swap'
import Image from 'next/image'

export default function SwapPage() {
  return (
    <div className="pageHeight relative flex w-full items-center justify-center p-4">
      <div className="floating absolute -left-8 top-0 z-0 blur-sm md:left-8">
        <Image
          src="/Presale/nfts (1).png"
          width={800}
          height={737}
          alt=""
          className="h-36 w-fit -rotate-12 object-contain mmd:h-48 opacity-60"
        />
      </div>
      <div
        className="floating absolute -right-8 bottom-0 z-0 blur-sm md:bottom-8 md:right-8"
        data-delay={1000}
      >
        <Image
          src="/Presale/nfts (2).png"
          width={800}
          height={803}
          alt=""
          className="h-36 w-fit rotate-12 object-contain mmd:h-48 opacity-60"
        />
      </div>
      <Swap />
    </div>
  )
}
