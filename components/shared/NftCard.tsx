import Image from 'next/image'
import { FaEthereum } from 'react-icons/fa'

interface INftCard {
  id: string
  imageUrl: string
  name: string
  price: number
}

const NftCard = ({ id, imageUrl, name, price }: INftCard) => {
  return (
    <div className="relative z-1 aspect-[11/13] w-full overflow-hidden rounded-2xl">
      <Image
        // src="/Nft/nft1.png"
        src={imageUrl}
        width={1000}
        height={1001}
        className="relative z-0 h-full object-cover"
        alt=""
      />
      {/* <div className="absolute bottom-0 left-0 right-0 z-1 flex w-full h-fit flex-col justify-center rounded-xl bg-themeBgBlack/30 md:p-4 p-2 backdrop-blur-md">
        <div className="font-medium md:text-xl">{name}</div>
        <div className="flex items-center gap-1 text-sm font-light md:text-base">
          {price} ETH <FaEthereum />
        </div>
      </div> */}
    </div>
  )
}

export default NftCard
