import axios from 'axios'
import { IPrivyLoginData } from '@/types/user'

export const getToken = () => {
  // console.log('token', localStorage.getItem('privy:token'))
  return localStorage.getItem('privy:token')?.slice(1, -1)
}

export const login = async (walletAddress: string, referral?: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
    referral
      ? {
        walletAddress: walletAddress,
        referralId: referral,
      }
      : {
        walletAddress: walletAddress,
      }
  )
  console.log(res)
  return res
}

export const userWalletByRefId = async (referral: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/user-by-referral-id`,
    {
      referralId: referral,
    }
  )
  return res
}

export const addTempReferral = async (referral: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/add-temp-referral`,
    { refId: referral },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data
}

export const addReferral = async () => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/add-referrel`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}

export const getUserReferrals = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/user-referrals`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data.referrals
}

export const addTwitter = async (twitter: { _id: string }) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/twitter`,
    twitter,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}

export const addTelegram = async (twitter: {
  first_name: string
  last_name: string
  id: number
  photo_url: string
  username: string
}) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/telegram`,
    twitter,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}

export const userWalletByUserId = async (userId: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/user-by-user-id`,
    {
      userId: userId,
    }
  )
  return res
}

export const getUserDetails = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/user-details`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data
}

export const verifyUser = async (data: {
  email?: string
  telegram?: string
  referral?: string
  waitlisted: boolean
}) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/verify`,
    data,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}

export const userDirectPartners = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/directPartners`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}

export const totalTeamPartners = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/totalTeamPartners`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}

export const registerAi = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/ai-register`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data
}

export const totalteamTurnOver = async (address: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/commission/user-team-turnover`,
    {
      walletAddress: address,
    }
  )
  return res.data
}

export const getUserRank = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/rank`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  })
  return res.data
}

export const getLeaderBoard = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/leader-board`
  )
  return res.data
}

export const joinWaitlist = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/join-waitlist`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data
}

export const privyLogin = async (data: IPrivyLoginData) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/privy-login`,
    data
  )
}

export const getUserTxn = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/loopTx/user-Looptransactions`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data
}

export const addDiscordUsername = async (discordUsername: string) => {
  const res = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/updateDiscordUsername`,
    {
      discordUsername: discordUsername,
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data
}
export const setFirstTimeUserFalse = async (firstTimeUser: boolean) => {
  const res = await axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/user/first-false`,
    {
      firstTimeUser: firstTimeUser,
    },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res.data
}

export const updateUserAccess = async () => {
  const res = await axios.patch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/update-user-access`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  )
  return res
}