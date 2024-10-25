export interface IPairInfo {
  pair: string
  coin: string
  symbol: string
  icon: string
}

export interface IActivePairs {
  [key: string]: IPairInfo
}

export const activePairs: IActivePairs = {
  BTC: {
    pair: 'BTC',
    coin: 'Bitcoin',
    symbol: 'BTC',
    icon: '/crypto/BTC.png',
  },
  ETH: {
    pair: 'ETH',
    coin: 'Ethereum',
    symbol: 'ETH',
    icon: '/crypto/ETH.png',
  },
  BNB: {
    pair: 'BNB',
    coin: 'BNB',
    symbol: 'BNB',
    icon: '/crypto/BNB.png',
  },
  SOL: {
    pair: 'SOL',
    coin: 'Solana',
    symbol: 'SOL',
    icon: '/crypto/SOL.png',
  },
  XRP: {
    pair: 'XRP',
    coin: 'Ripple',
    symbol: 'XRP',
    icon: '/crypto/XRP.png',
  },
  TRX: {
    pair: 'TRX',
    coin: 'Tron',
    symbol: 'TRX',
    icon: '/crypto/TRX.png',
  },
  MATIC: {
    pair: 'MATIC',
    coin: 'Polygon',
    symbol: 'MATIC',
    icon: '/crypto/MATIC.png',
  },
  AVAX: {
    pair: 'AVAX',
    coin: 'Avalanche',
    symbol: 'AVAX',
    icon: '/crypto/AVAX.png',
  },
  DOT: {
    pair: 'DOT',
    coin: 'Polkadot',
    symbol: 'DOT',
    icon: '/crypto/DOT.png',
  },
  UNI: {
    pair: 'UNI',
    coin: 'Uniswap',
    symbol: 'UNI',
    icon: '/crypto/UNI.png',
  },
}
