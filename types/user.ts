export interface ISocial {
  username: string
  id: string
  email: string
}

export interface ITwitter {
  name: string
  username: string
  id: string
  photoURL: string
}

export interface IGoogle {
  name: string
  email: string
  id: string
}

export interface IPrivyLoginData {
  discord?: ISocial
  twitter?: ITwitter
  google?: IGoogle
  id: string
  walletAddress: string
  email?: string
}