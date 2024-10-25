import { createPublicClient, http } from 'viem'
import {mainnet, goerli} from 'viem/chains'

export const chain = process.env.NEXT_PUBLIC_SERVER === "DEV" ? goerli: mainnet;

export const createPublicClientLocal = () => {
  return createPublicClient({
    chain: chain,
    transport: http()
  })
}