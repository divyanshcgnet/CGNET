import Animated from '../shared/Animated'
import NftCollectionMarqee from './NftCollectionMarqee'

const NftCollection = () => {
  return (
    <Animated className="flex flex-col items-center gap-8 px-4 mmd:px-16 py-16 md:py-20 mmd:flex-row">
      <div className="whitespace-nowrap text-3xl font-bold mmd:text-left text-center md:text-5xl">
        Unveiling CG <br className='mmd:block hidden' /> NFT <br className='block mmd:hidden' /> collection
      </div>
      <NftCollectionMarqee />
    </Animated>
  )
}

export default NftCollection
