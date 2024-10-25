import Image from 'next/image'
import Button from '../shared/Button'
import { BsArrowRightShort } from 'react-icons/bs'
import { HiOutlineStop } from 'react-icons/hi'
import { ButtonType } from '@/types/buttton'
import Animated from '../shared/Animated'

const AiIntroImage = () => {
  return (
    <div className="relative top-0 z-2 h-full w-full">
      <div className="relative mx-auto h-full max-h-[250px] w-full max-w-[345px] md:max-h-[350px] md:max-w-[445px]">
        <Image
          src="/CgAi/ChatAi/ai-intro.png"
          width={1200}
          height={1200}
          alt=""
          className="relative z-0 mx-auto h-full w-full object-contain py-16 pl-12 pr-12 mmd:py-8"
        />
        <Animated
          delay={200}
          className="absolute -left-[5%] -top-[5%] flex w-fit !scale-50 flex-col gap-4 rounded-3xl border border-white/40 bg-[#13172280] p-4 backdrop-blur-lg mmd:!scale-75"
        >
          <div className="">
            Suggest portfolio <br /> adjustments to maximize <br /> returns
          </div>
          <div className="text-sm font-light text-white/60">
            Upload your portfolio 📈
          </div>
        </Animated>
        <Animated
          delay={400}
          className="absolute right-0 top-[15%] flex w-fit !scale-50 flex-col gap-4 rounded-3xl border border-white/40 bg-[#13172280] p-4 pr-12 backdrop-blur-lg mmd:!scale-75"
        >
          <div className="">Analyze my trade</div>
          <div className="text-sm font-light text-white/60">
            Share trade details 📈
          </div>
        </Animated>
        <Animated
          delay={600}
          className="absolute -left-[10%] bottom-[10%] flex w-fit !scale-50 flex-col gap-4 rounded-3xl border border-white/40 bg-[#13172280] p-4 pr-20 backdrop-blur-lg mmd:bottom-0 mmd:!scale-75"
        >
          <div className="">
            Analyse volume of this <br /> cryptocurrency
          </div>
          <div className="text-sm font-light text-white/60">
            Upload ticker 📈
          </div>
        </Animated>
        <Animated
          delay={800}
          className="absolute -bottom-[5%] right-[5%] flex w-fit !scale-50 flex-col gap-4 rounded-3xl border border-white/40 bg-[#13172280] p-4 backdrop-blur-lg mmd:right-0 mmd:!scale-75"
        >
          <div className="">
            Top 10 holders for this <br /> smart contract
          </div>
          <div className="text-sm font-light text-white/60">
            Upload a contract 🧭
          </div>
        </Animated>
      </div>
    </div>
  )
}

export default AiIntroImage
