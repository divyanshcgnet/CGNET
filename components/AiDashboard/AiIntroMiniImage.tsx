import Image from 'next/image'
import Button from '../shared/Button'
import { BsArrowRightShort } from 'react-icons/bs'
import { HiOutlineStop } from 'react-icons/hi'
import { ButtonType } from '@/types/buttton'
import Animated from '../shared/Animated'
const AiIntroMiniImage = () => {
  return (
    <div className="z-2 w-full">
      <div className="relative w-full">

        {/* <Animated delay={200} className="absolute -left-[45%] top-0 pt-16">
          <div className="z-1 flex w-fit flex-col gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm">
            <div className="font-semibold uppercase text-themeVioletText">
              📌 Daily Nuggets of Wisdom
            </div>
            <div className="text-themeBorder">
              Choose your leverage wisely with <br /> the power of AI.
            </div>
          </div>
        </Animated> */}
        {/* <Animated delay={300} className="absolute -right-[55%] -top-[5%] pt-16">
          <div className="flex h-20 w-fit gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm">
            <div className="flex flex-col items-start gap-2">
              <div>Analyse trades using CG AI</div>
              <Button className="!min-h-fit !gap-1 !px-4 !py-2 !text-xs !font-light">
                Get Started <BsArrowRightShort className="text-base" />
              </Button>
            </div>
            <Image
              src="/Homepage/AiSection/ai-sec.png"
              width={523}
              height={374}
              className="h-12 w-fit -rotate-[16deg] object-contain"
              alt=""
            />
          </div>
        </Animated> */}
        {/* <Animated delay={400} className="absolute -right-[20%] top-[30%] pt-16">
          <div className="flex w-fit items-center gap-2 rounded-full border-2 border-themeBlue bg-themeNavBlack/40 py-1 pl-2 pr-4 text-xs backdrop-blur-sm">
            <HiOutlineStop className="text-xl text-themeBlue" /> Stop
            Regenerating
          </div>
        </Animated> */}
        {/* <Animated delay={500} className="absolute -left-[25%] top-[48%] pt-16">
          <div className="flex w-fit flex-col rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-xs backdrop-blur-sm">
            <div>
              Trade using volume <br /> profile strategy
            </div>
            <span className="my-2 -rotate-[21deg] text-5xl">
              <Image
                src="/CgAi/ChatAi/anchor.png"
                width={320}
                height={579}
                alt=""
                className="h-10 w-10 -rotate-[-21deg]"
              />
            </span>
          </div>
        </Animated> */}
        {/* <Image
          src="/landing/fingerprint.png"
          width={320}
          height={579}
          alt=""
          className="absolute -left-[30%] top-[5%] z-0 h-36 w-36"
        /> */}
         <Image
          src="/landing/PinkSmile.png"
          width={500}
          height={579}
          alt=""
          className="z-1 h-72 w-full px-12 absolute"
        />
         <Image
          src="/landing/fingerprint.png"
          width={500}
          height={579}
          alt=""
          className="z-0 h-36 w-full px-12 -left-[20%] top-[5%]"
        />
        {/* <Animated delay={600} className="absolute -right-[59%] top-[55%] pt-16">
          <div className="flex w-fit flex-col items-center gap-2 rounded-2xl border border-themeTextGrey bg-themeNavBlack/40 p-4 text-center text-xs backdrop-blur-sm">
            <div>Choose your trading style</div>
            <div className="flex justify-center gap-1">
              <Button className="!min-h-fit !gap-1 !px-3 !py-2 !text-xs !font-light">
                Novice
              </Button>
              <Button
                type={ButtonType.SECONDARY}
                className="flex !min-h-fit items-center justify-center !gap-1 rounded-lg from-themeViolet to-themeBlue !px-3 !py-2 !text-xs !font-light transition-all duration-700 hover:!bg-gradient-to-r hover:from-themeBlue hover:to-themeBlue hover:!text-white disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
              >
                Intermediate
              </Button>
              <Button
                type={ButtonType.SECONDARY}
                className="flex !min-h-fit items-center justify-center !gap-1 rounded-lg from-themeViolet to-themeBlue !px-3 !py-2 !text-xs !font-light transition-all duration-700 hover:!bg-gradient-to-r hover:from-themeBlue hover:to-themeBlue hover:!text-white disabled:!from-themeGrey disabled:!to-themeGrey disabled:text-themeTextGrey md:px-6"
              >
                Advanced
              </Button>
            </div>
          </div>
        </Animated> */}
      </div>
    </div>
  )
}

export default AiIntroMiniImage
