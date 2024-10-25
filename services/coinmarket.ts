import axios from 'axios'

const createUrl = (path: string) => {
  return `${process.env.NEXT_PUBLIC_AWS_COINMARKETCAP_PROXY}?url=${process.env.NEXT_PUBLIC_COINMARKETCAP_BASE_URL}${path}`
}

export const getCoinInfo = async (symbol: string) => {
  const res = await axios.get(
    `${createUrl('/v2/cryptocurrency/info')}&param=symbol&value=${symbol}`
  )
  return res.data.data[symbol][0]
}

export const getCoinInfoFromSlug = async (symbol: string) => {
  const res = await axios.get(
    `${createUrl('/v2/cryptocurrency/info')}&param=slug&value=${symbol}`
  )
  return res.data.data[Object.keys(res.data.data)[0]]
}

export const getCoinOhlcv = async (symbol: string) => {
  const res = await axios.get(
    `${createUrl(
      '/v2/cryptocurrency/ohlcv/latest'
    )}&param=symbol&value=${symbol}`
  )
  return res.data.data[symbol][0]
}

export const getNews = async (symbol: string) => {
  const res = await axios.get(
    `${createUrl('/v1/content/latest')}&param=symbol&value=${symbol}`
  )
  return res.data.data
}

export const getAllNews = async () => {
  const res = await axios.get(`${createUrl('/v1/content/latest')}`)
  return res.data.data
}

export const getPrice = async (symbol: string) => {
  const res = await axios.get(
    `${createUrl(
      '/v2/cryptocurrency/quotes/latest'
    )}&param=symbol&value=${symbol}`
  )
  return res.data.data[symbol][0]
}
