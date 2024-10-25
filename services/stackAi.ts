import axios from 'axios'

const chatAuth = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STACK_CHAT_API_KEY}`,
  },
  responseType: 'stream',
}

export const sendChatChatGenius = async (message: {
  'in-0': string
  user_id: string
}) => {
  // return axios.post(
  //   `${process.env.NEXT_PUBLIC_STACK_URL}/stream_exported_flow?flow_id=${process.env.NEXT_PUBLIC_STACK_CHAT_GENIUS_FLOW_ID}&org=${process.env.NEXT_PUBLIC_STACK_ORG_ID}`,
  //   message,
  //   //@ts-ignore
  //   chatAuth
  // )
  return axios({
    method: 'POST',
    url: `${process.env.NEXT_PUBLIC_STACK_URL}/stream_exported_flow?flow_id=${process.env.NEXT_PUBLIC_STACK_CHAT_GENIUS_FLOW_ID}&org=${process.env.NEXT_PUBLIC_STACK_ORG_ID}`,
    responseType: 'stream',
    data: message,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STACK_CHAT_API_KEY}`,
    },
  })
}

export const sendChatTradeAnalyzer = async (message: {
  'in-0': string
  user_id: string
}) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_STACK_URL}/stream_exported_flow?flow_id=${process.env.NEXT_PUBLIC_STACK_TRADE_ANALYZER_FLOW_ID}&org=${process.env.NEXT_PUBLIC_STACK_ORG_ID}`,
    message,
    //@ts-ignore
    chatAuth
  )
}
