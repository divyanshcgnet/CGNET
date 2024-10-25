import FaqAccordion from './FaqAccordion'

const MintFaq = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4 px-4 mmd:px-16">
      <div className="mb-8 text-3xl font-bold md:text-5xl">FAQ</div>
      <FaqAccordion
        title="What's is the criteria to receive free CryptoGrad NFTs?"
        body="A member will only be eligible for the free CG NFT Airdrop if they were on the beta and have not used their CG tokens that were rewarded during the beta. "
      />
      <FaqAccordion
        title="How to receive free CG Tokens and NFTs?"
        body="A member will only be eligible for the free CG NFT Airdrop if they were on the beta and have not used their CG tokens that were rewarded during the beta. "
      />
      <FaqAccordion
        title="How to maximize my learning potential?"
        body="A member will only be eligible for the free CG NFT Airdrop if they were on the beta and have not used their CG tokens that were rewarded during the beta. "
      />
      <FaqAccordion
        title="What’s the mandatory staking period to receive the FREE AIRDROPS?"
        body="A member will only be eligible for the free CG NFT Airdrop if they were on the beta and have not used their CG tokens that were rewarded during the beta. "
      />
    </div>
  )
}

export default MintFaq
