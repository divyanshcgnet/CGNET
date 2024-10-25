import Image from 'next/image'
import Animated from '../shared/Animated'
import Button from '../shared/Button'

const CgBenefits = () => {
  return (
    <Animated className="w-full relative z-1 flex flex-col-reverse items-center gap-8 px-4 mmd:px-16 md:py-20 md:min-w-fit mmd:flex-row">
      <div className="flex w-full flex-col gap-8">
        <div className="text-3xl font-bold md:text-5xl">
          <span className="text-themeBorderBlue">Benefits </span>for CG holders
        </div>
        <div className="flex flex-col gap-4 text-lg">
        Holders get early and discounted access to the platform, as well as priority to review and make key decisions for CryptoGrad&apos;s growth
        </div>
        <Button className="h-12 w-fit text-xl">Swap Now</Button>
      </div>
      <div className="relative z-1 w-full">
        <Image
          src="/Homepage/CgBenefits/cgBenefits.webp"
          alt=""
          width={1930}
          height={1397}
          className="mx-auto w-full object-contain"
        />
      </div>
    </Animated>
  )
}

export default CgBenefits
