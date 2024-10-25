import {
  BiAlignLeft,
  BiBulb,
  BiCompass,
  BiCrown,
  BiGridAlt,
  BiGroup,
  BiHeadphone,
  BiLogOut,
  BiMessageRoundedDetail,
  BiNotepad,
  BiSolidBot,
  BiHelpCircle,
  BiExport,
} from 'react-icons/bi'
import { FaRegChartBar } from 'react-icons/fa'
import { TbCashBanknote } from 'react-icons/tb'
import { TbGift } from 'react-icons/tb'
import { MdOutlineAutoGraph } from 'react-icons/md'

export const sidebarItems = [
  {
    path: 'dashboard',
    title: 'Dashboard',
    icon: () => <BiMessageRoundedDetail />,
  },
  {
    path: 'transactions',
    title: 'Transactions',
    icon: () => <TbCashBanknote />,
  },
  {
    path: 'refer',
    title: 'Refer & Earn',
    icon: () => <TbGift />,
  },
]
export const aiSidebarItems = [
  {
    seprator: false,
    path: '/CG-AI/explore',
    title: 'Explore',
    icon: () => <BiCompass />,
  },
  {
    seprator: false,
    path: '/CG-AI/dashboard',
    title: 'AI Dashboard',
    icon: () => <BiGridAlt />,
  },
  {
    seprator: false,
    path: '/CG-AI/chat/chat-genius/newChat',
    title: 'AI Chat',
    icon: () => <BiMessageRoundedDetail />,
  },
  {
    seprator: false,
    path: '/CG-AI/tasks',
    title: 'AI Tasks',
    icon: () => <BiNotepad />,
  },
  {
    seprator: false,
    path: '/CG-AI/markets/BTC',
    title: 'Market Stats',
    icon: () => <FaRegChartBar />,
  },
  {
    seprator: false,
    path: '/CG-AI/trade-ideas',
    title: 'Trade Ideas',
    icon: () => <BiBulb />,
  },
  // {
  //   seprator: false,
  //   path: '/mint',
  //   title: 'NFTs',
  //   icon: () => <BiSolidBot />,
  // },
  // {
  //   seprator: false,
  //   path: '/presale',
  //   title: 'Pre-Sale',
  //   icon: () => <BiCrown />,
  // },
  // {
  //   seprator: false,
  //   path: '/stake',
  //   title: 'Stake',
  //   icon: () => <MdOutlineAutoGraph />,
  // },
  // {
  //   seprator: false,
  //   path: '/CG-AI/community',
  //   title: 'Community',
  //   icon: () => <BiGroup />,
  // },
  {
    seprator: false,
    path: '/CG-AI/blog',
    title: 'Blog',
    icon: () => <BiAlignLeft />,
  },
  {
    seprator: true,
    path: '/CG-AI/subscription',
    title: 'Subscription',
    icon: () => <TbCashBanknote />,
  },
  {
    seprator: false,
    path: '/CG-AI/referral',
    title: 'Refer & Earn',
    icon: () => <TbGift />,
  },
  {
    seprator: false,
    path: '/CG-AI/contact',
    title: 'Contact Us',
    icon: () => <BiHeadphone />,
  },
  {
    seprator: false,
    path: '/CG-AI/suggestions',
    title: 'Help us Improve',
    icon: () => <BiHelpCircle />,
  },
  {
    seprator: false,
    path: '/logout',
    title: 'Log Out',
    icon: () => <BiLogOut />,
  },
]
