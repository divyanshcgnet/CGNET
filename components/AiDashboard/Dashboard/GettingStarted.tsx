import Image from 'next/image'

export default function GettingStarted() {
  return (
    <div className="min-w-[41rem] grid grid-cols-3 gap-4 pt-8 xl:gap-20">
      <div className="relative flex min-w-[13rem] flex-col gap-2 rounded-xl border-2 border-white/40 p-4">
        <span className="text-sm text-themeBorderBlue md:text-base">
          Step 1:
        </span>
        <div className="font-semibold mmd:text-lg lg:text-xl xl:text-2xl">
        Get Started with AI <br />tools
        </div>
        <Image
          src="/Homepage/AiSection/ai-sec.png"
          width={523}
          height={374}
          className="absolute -top-4 right-0 h-8 w-fit -rotate-[16deg] object-contain md:h-12"
          alt=""
        />
      </div>
      <div className="relative flex min-w-[13rem] flex-col gap-2 rounded-xl border-2 border-white/40 p-4">
        <span className="text-sm text-themeBorderBlue md:text-base">
          Step 2:
        </span>
        <div className="font-semibold mmd:text-lg lg:text-xl xl:text-2xl">
        Enhance Your Web3.0<br />Skills
        </div>
        <Image
          src="/CgAi/ChatAi/512.png"
          width={300}
          height={298}
          className="absolute -top-8 right-0 h-16 w-fit -rotate-[16deg] object-contain md:h-20"
          alt=""
        />
      </div>
      <div className="relative flex min-w-[13rem] flex-col gap-2 rounded-xl border-2 border-white/40 p-4">
        <span className="text-sm text-themeBorderBlue md:text-base">
          Step 3:
        </span>
        <div className="font-semibold mmd:text-lg lg:text-xl xl:text-2xl">
          Dominate the <br />  Blockchain world
        </div>
        <Image
          src="/CgAi/ChatAi/513.png"
          width={300}
          height={295}
          className="absolute -top-8 right-0 h-16 w-fit -rotate-[16deg] object-contain md:h-20"
          alt=""
        />
      </div>
    </div>
  )
}