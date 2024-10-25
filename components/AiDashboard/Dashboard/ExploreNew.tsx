import Image from 'next/image'

const ExploreNew = () => {
  return (
    <div className="w-full overflow-x-auto flex gap-6 md:gap-12">
      <div className="relative h-fit w-[256px] rounded-xl border-[0.4px] border-[#FDFDFD99] px-4 py-4">
        <p className="text-base font-normal text-[#5E5AFF]">Step 1:</p>
        <p className="text-2xl font-bold text-white">
          Learn how to input <br />
          trading data{' '}
        </p>
        <Image
          src="/CgAi/ChatAi/red-face.png"
          width={523}
          height={175}
          alt=""
          className="absolute -right-[20%] -top-[22%] z-1 w-28 h-28"
        />
      </div>
      <div className="relative h-fit w-[256px] rounded-xl border-[0.4px] border-[#FDFDFD99] px-4 py-4">
        <p className="text-base font-normal text-[#5E5AFF]">Step 1:</p>
        <p className="text-2xl font-bold text-white">
          Learn how to input <br />
          trading data{' '}
        </p>
        <Image
          src="/CgAi/ChatAi/red-face.png"
          width={523}
          height={175}
          alt=""
          className="absolute -right-[15%] -top-[40%] z-1 w-28 h-28"
        />
      </div>
      <div className="relative h-fit w-[256px] rounded-xl border-[0.4px] border-[#FDFDFD99] px-4 py-4">
        <p className="text-base font-normal text-[#5E5AFF]">Step 1:</p>
        <p className="text-2xl font-bold text-white">
          Learn how to input <br />
          trading data{' '}
        </p>
        <Image
          src="/CgAi/ChatAi/red-face.png"
          width={523}
          height={175}
          alt=""
          className="absolute -right-[15%] -top-[40%] z-1 w-28 h-28"
        />
      </div>
    </div>
  )
}

export default ExploreNew
