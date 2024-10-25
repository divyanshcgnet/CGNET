'use client'

import { useState } from 'react'
import Accordion from '../shared/policy/Accordion'

const FAQ = [
  {
    title: "What is Cryptograd Network?",
    content: "Cryptograd Network is a cutting-edge platform designed to support both beginners and experienced traders in the cryptocurrency world. We provide a comprehensive ecosystem with advanced AI tools—such as Chatgenius, Trade Analyzer, CryptoBuzz, and Contract Insight—that offer real-time insights, trade analysis, market sentiment tracking, and in-depth contract evaluations. Our platform not only helps you make informed trading decisions but also saves time by automating complex tasks. In addition to these tools, Cryptograd Network offers educational resources, including interactive video lessons on cryptocurrency basics and advanced trading strategies. For those interested in coding, we provide resources to help you start with blockchain development, including learning to write and deploy smart contracts using Solidity. Whether you're new to crypto or a seasoned trader, Cryptograd Network equips you with the tools, knowledge, and community support needed to thrive in the dynamic cryptocurrency market.",
  },
  {
    title: "What subscription plans do you offer?",
    content: "We offer three subscription plans:\n\n1 Month for $99.99: Includes access to all AI tools (ChatGenius AI, TradeAnalyzer AI, CryptoBuzz AI, ContractInsight AI), educational content, market analysis by traders, trade ideas, Discord community, news & blogs, market stats, and 24/7 chat support.\n\n3 Months for $249.99 (15% discount): Includes everything in the 1-month plan plus exclusive TradingView indicators, weekly crypto market reports, AI tools on Discord, and Launchpad access.\n\n12 Months for $829.99 (30% discount): Includes everything in the 3-month plan plus a personalized investing plan, monthly investment reviews, exclusive job opportunities, and a private group with traders.",
  },
  {
    title: "What Technology Does Cryptograd Network Use?",
    content: "Cryptograd Network leverages advanced AI, with each of our tools—Chatgenius, Trade Analyzer, CryptoBuzz, and Contract Insight—powered by 23 language learning models (LLMs). We integrate Convolutional Neural Networks (CNNs), Optical Character Recognition (OCR), Retrieval-Augmented Generation (RAG), and machine learning to provide real-time insights, trade analysis, and market sentiment tracking. These AI-driven tools automate complex tasks, helping you make quick, informed decisions while minimizing risk. Supported by a secure cloud infrastructure and vector databases, Cryptograd Network ensures a seamless and efficient experience for cryptocurrency traders.",
  },
  {
    title: "Can I pay with cryptocurrency?",
    content: "Yes, you can pay with either card payment or cryptocurrency payment for any of our subscription plans.",
  },
  {
    title: "Can I cancel my subscription at any time?",
    content: "Yes, you can cancel your subscription at any time. If you cancel, your subscription will remain active until the end of your current billing period.",
  },
  {
    title: "What happens after my 3-day free trial ends?",
    content: "If you choose to continue with your subscription after the 3-day free trial, your payment method will be charged according to the plan you selected.",
  },
  {
    title: "Is the free trial only available for card payments?",
    content: "Yes, the 3-day free trial is only available when you sign up using a credit or debit card. Unfortunately, the free trial is not available for cryptocurrency payments.",
  },
  {
    title: "How Does Cryptograd Network Benefit Me?",
    content: "Cryptograd Network simplifies your cryptocurrency journey by offering:\n\n- Learning: Access interactive lessons covering everything from basics to advanced trading.\n- AI Tools: Use Chatgenius, Trade Analyzer, CryptoBuzz, and Contract Insight for real-time insights, automated analysis, and market updates.\n- Time Savings: Automate complex tasks, freeing you to focus on strategy.\n- Coding: Learn blockchain development and smart contract coding.\n- Community: Join a supportive network of traders and experts.\n- Market Edge: Stay updated with market sentiment and trends.\n\nCryptograd Network provides the tools, knowledge, and support you need to succeed in crypto.",
  },
  {
    title: "I am an experienced trader, how does Cryptograd Network benefit me?",
    content: "For experienced traders, time is of the essence, and that's where Cryptograd Network truly shines. Our suite of AI-powered tools—Chatgenius, Trade Analyzer, CryptoBuzz, and Contract Insight—are designed to save you valuable time by automating complex tasks. Whether it's analyzing market trends, generating trade ideas, or performing in-depth contract analysis, our tools provide instant insights that allow you to make quick, informed decisions.",
  },
  {
    title: "What is the Learn-to-Earn Model?",
    content: "The Learn-to-Earn model at Cryptograd Network rewards you for actively engaging with the platform. Here&apos;s how it works:\n\n- More AI Prompts, More Rewards: The more you interact with our AI tools, the more rewards you earn.\n- Watch More Videos, Earn More Rewards: As you watch our educational videos, you accumulate additional rewards.\n- Use Your Rewards: Currently, the rewards you earn can be used to participate in exclusive seminars with industry leaders.\n\nThis model makes learning on Cryptograd Network both educational and rewarding, encouraging you to stay engaged and continue growing your knowledge.",
  },
  {
    title: "Is my data and information safe on Cryptograd Network?",
    content: "We take data security seriously. Cryptograd Network employs advanced encryption and security measures to protect your personal and financial information, ensuring a safe user experience.",
  },
  {
    title: "Is telegram free to access?",
    content: "Yes, Cryptograd Network’s Telegram channel serves as a free community platform for support, announcements, and learning more about Cryptograd Network and its offerings.",
  },
  {
    title: "Is incubation for everyone?",
    content: "Yes, Cryptograd Network’s Incubator Lab is designed to cater to individuals and teams at various stages of their blockchain project development journey. Whether you're just starting to conceptualize your blockchain idea, building an MVP, or preparing for market entry, our incubation program provides comprehensive support and guidance tailored to your specific needs. To gain access to Cryptograd Network’s Incubator Lab, simply fill out the incubation form with information about your blockchain project and goals. Our team will review your application to determine eligibility for the program.",
  },
]

export default function Faq() {
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
    <div className="relative mx-auto flex w-full max-w-[960px] flex-col items-center gap-12 overflow-hidden px-4 pb-16 pt-8 mmd:gap-24 mmd:px-16 mmd:pb-32 mmd:pt-24">
      <h1 className="relative z-1 text-center text-4xl font-semibold md:text-5xl">
        Frequently Asked Questions
      </h1>
      <div className="relative z-1 flex w-full flex-col">
        {FAQ.map((faq, idx) => (
          <Accordion
            key={idx}
            index={idx}
            togglePanels={togglePanels}
            title={faq.title}
          >
            {faq.content}
          </Accordion>
        ))}
      </div>
    </div>
  )
}
