'use client'

import Accordion from '../shared/policy/Accordion'
import { useState } from 'react'
import Image from 'next/image'

const FAQ = [
  {
    title: 'What is Cryptograd?',
    content:
      'Cryptograd is a revolutionary crypto education and trading platform powered by advanced AI technologies like LLMs, ITTIMs, OCR, and more. It offers a user-friendly experience and cutting-edge features for both beginners and experts.',
  },
  {
    title: 'Why Choose Cryptograd?',
    content:
      'Cryptograd stands out with its comprehensive platform, designed for all skill level traders. It provides a competitive edge with features like a chatbot, trade analyser, AI news, and smart contract analysis, all delivered responsibly and accurately. Join us for the future of crypto education and trading.',
  },
  // {
  //   title: 'How do I get access to what Cryptograd offers?',
  //   content:
  //     "To access Cryptograd's offerings, including our cutting-edge technology and educational resources, you can participate in our presale. By joining the presale, you'll gain early access and exclusive benefits.",
  // },
  {
    title: "How can I participate in Cryptograd's presale?",
    content:
      'Participating in the presale is easy. You can visit our presale page, connect supported wallets, and purchase CG tokens using supported cryptocurrencies.',
  },
  {
    title:
      'How can I earn CG tokens through the referral system during the presale?',
    content:
      "During our presale, you can earn CG tokens by referring friends and contacts to participate. When your referrals join the presale and purchase CG tokens, you will receive a reward in CG tokens as a percentage of their contribution. This referral system is designed to incentivize and reward you for spreading the word about Cryptograd and contributing to our community's growth. A more detailed guide on referral can be seen here- https://cryptograd.ai/referral",
  },
]

export default function PresaleFaq() {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState<any>(null)

  function togglePanels(newPanel: any) {
    if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close()
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    })
  }
  return (
    <div
      id="FAQ"
      className="relative mx-auto flex w-full flex-col items-center gap-12 overflow-hidden overflow-hidden px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pt-24"
    >
      <Image
        src="/smallEllipse.svg"
        alt=""
        width={326}
        height={276}
        className="absolute -right-[46%] bottom-0 z-0 h-3/5 w-full"
      />
      <h1 className="relative z-1 text-center text-4xl font-semibold md:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="relative z-1 flex w-full max-w-[960px] flex-col">
        {FAQ.map((faqItem, index) => (
          <Accordion
            key={index}
            className="!border-[#5d5aff8e]"
            title={faqItem.title}
            togglePanels={togglePanels}
            index={index}
          >
            {faqItem.content}
          </Accordion>
        ))}
      </div>
    </div>
  )
}
