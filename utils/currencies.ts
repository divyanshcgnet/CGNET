export interface ICurrency {
  name: string
  icon: string
  address: string
}

export const currencies: ICurrency[] = [
  {
    name: 'ETH',
    icon: '/crypto/ETH.png',
    address: '0x55d398326f99059fF775485246999027B3197955',
  },
  {
    name: 'USDT',
    icon: '/crypto/USDT.png',
    address: '0xdd44427Fbe94Cf691C2715fD68EC8F14f55A96B3',
  },
  {
    name: 'USDC',
    icon: '/crypto/USDC.png',
    address: '0x3C07166583E410477680fa56f0789B2dEB0B9C35',
  },
]

export const getName = (token: string) => {
  return currencies.find((curr) => curr.address === token)?.name
}
