import Image from 'next/image'
import Animated from '../shared/Animated'

const ClaimDialogImage = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/Claim/claimImage.png"
        className="w-full"
        width={386}
        height={381}
        alt=""
      />
      <Animated
        delay={200}
        className="absolute left-[5%] top-[20%] !scale-75 rounded-lg border border-themeTextGrey/30 bg-themeDialogBlack/40 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        All in one knowledge base
      </Animated>
      <Animated
        delay={400}
        className="absolute right-[5%] top-[50%] !scale-75 rounded-lg border border-themeTextGrey/40 bg-themeDialogBlack/30 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        Access to exclusive community✨
      </Animated>
      <Animated
        delay={600}
        className="absolute bottom-[12%] left-[20%] !scale-75 rounded-lg border border-themeTextGrey/40 bg-themeDialogBlack/30 px-4 py-2 backdrop-blur-lg md:scale-100 mmd:scale-75 xl:scale-100"
      >
        Assisted trading with AI & educators
      </Animated>
    </div>
  )
}

export default ClaimDialogImage
