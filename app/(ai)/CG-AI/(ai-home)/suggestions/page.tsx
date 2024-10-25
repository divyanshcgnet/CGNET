'use client'

import Button from '@/components/shared/Button'
import { Listbox, Transition } from '@headlessui/react'
import axios from 'axios'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Fragment, useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { emailRegex } from '@/utils/emailRegex'
import ResponseDialog, { DialogType } from '@/components/shared/ResponseDialog'

const services = [
  {
    name: 'Chat AI',
  },
  {
    name: 'CG Token',
  },
]

const featureType = [
  {
    name: 'Technology related',
  },
  {
    name: 'AI related',
  },
  {
    name: 'Web3 related',
  },
  {
    name: 'Community',
  },
  {
    name: 'Something Else',
  },
]
const feedbackType = [
  {
    name: 'AI Tools',
  },
  {
    name: 'Web 3',
  },
  {
    name: 'UI/UX',
  },
  {
    name: 'Marketing',
  },
  {
    name: 'Community',
  },
  {
    name: 'Something Else',
  },
]

export default function Suggestions() {
  const [selectedFeature, setSelectedFeature] = useState({
    name: 'Technology related',
  })
  const [selectedFeedback, setSelectedFeedback] = useState({
    name: 'AI Tools',
  })
  const [featureLoading, setFeatureLoading] = useState(false)
  const [feedbackloading, setFeedbackLoading] = useState(false)
  const [name, setName] = useState('')
  const [telegram, setTelegram] = useState('')
  const [discord, setDiscord] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [nameFeedback, setNameFeedback] = useState('')
  const [telegramFeedback, setTelegramFeedback] = useState('')
  const [discordFeedback, setDiscordFeedback] = useState('')
  const [emailFeedback, setEmailFeedback] = useState('')
  const [messageFeedback, setMessageFeedback] = useState('')
  const [dialog, setDialog] = useState(false)
  const [dialogType, setDialogType] = useState(DialogType.SUCCESS)



  const sendMail = async (type: 'feature' | 'feedback') => {
    type === 'feature' ? setFeatureLoading(true) : setFeedbackLoading(true)
    try {
      const data = {
        telegramUsername: type === 'feature' ? telegram : telegramFeedback,
        discordUsername: type === 'feature' ? discord : discordFeedback,
        messageType:
          type === 'feature' ? selectedFeature.name : selectedFeedback.name,
        userEmail: type === 'feature' ? email : emailFeedback,
        messageContent: type === 'feature' ? message : messageFeedback,
      }
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/email`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      )
      console.log(res)
      setFeatureLoading(false)
      setFeedbackLoading(false)
      setTelegram('')
      setDiscord('')
      setName('')
      setEmail('')
      setMessage('')
      setDialog(true)
      setDialogType(DialogType.SUCCESS)
    } catch (error) {
      setDialog(true)
      setDialogType(DialogType.FAILED)
      setFeatureLoading(false)
      setFeedbackLoading(false)
      setMessage('')

    }
  }

  return (
    <div className="pageHeight flex w-full flex-col gap-16 p-4 md:p-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-2xl font-semibold">
          Suggest A New Feature
        </div>
        <div className="w-full">
          We continuously strive to enhance our offerings, committed to
          providing our users with even more valuable features and capabilities.
        </div>
        <div className="flex w-full flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
          {/*<div className="flex items-center gap-2">*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    placeholder="Telegram Username"*/}
          {/*    required*/}
          {/*    value={telegram}*/}
          {/*    onChange={(e) => setTelegram(e.target.value)}*/}
          {/*    className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"*/}
          {/*  />*/}
          {/*  <input*/}
          {/*    type="test"*/}
          {/*    placeholder="Discord Username"*/}
          {/*    value={discord}*/}
          {/*    onChange={(e) => setDiscord(e.target.value)}*/}
          {/*    className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"*/}
          {/*  />*/}
          {/*</div>*/}
          <Listbox value={selectedFeature} onChange={setSelectedFeature}>
            <div className="relative w-full">
              <Listbox.Button className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-left text-lg outline-none">
                <span className="block truncate">{selectedFeature.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">
                  <FaChevronDown />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlack py-1 text-base shadow-lg ring-1 ring-themeBlackDeep focus:outline-none">
                  {featureType.map((service, serviceIdx) => (
                    <Listbox.Option
                      key={serviceIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none px-4 py-2 ${
                          active ? 'bg-themeBorderBlue' : ''
                        }`
                      }
                      value={service}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {service.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <textarea
            placeholder="Feature Details"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            autoComplete="off"
            className="w-full resize-none rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
        </div>
        <Button
          disabled={!name || !email || !emailRegex.test(email) || !message}
          onClick={() => sendMail('feature')}
          className="h-12 w-full md:!w-64"
          loading={featureLoading}
        >
          Submit Feature
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-2xl font-semibold">Provide Feedback</div>
        <div className="w-full">
          Share your valuable feedback with the CryptoGrad Ecosystem
        </div>
        <div className="flex w-full flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            required
            value={nameFeedback}
            onChange={(e) => setNameFeedback(e.target.value)}
            className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={emailFeedback}
            onChange={(e) => setEmailFeedback(e.target.value)}
            className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
          {/*<div className="flex items-center gap-2">*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    placeholder="Telegram Username"*/}
          {/*    required*/}
          {/*    value={telegramFeedback}*/}
          {/*    onChange={(e) => setTelegramFeedback(e.target.value)}*/}
          {/*    className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"*/}
          {/*  />*/}
          {/*  <input*/}
          {/*    type="test"*/}
          {/*    placeholder="Discord Username"*/}
          {/*    value={discordFeedback}*/}
          {/*    onChange={(e) => setDiscordFeedback(e.target.value)}*/}
          {/*    className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"*/}
          {/*  />*/}
          {/*</div>*/}
          <Listbox value={selectedFeedback} onChange={setSelectedFeedback}>
            <div className="relative w-full">
              <Listbox.Button className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-left text-lg outline-none">
                <span className="block truncate">{selectedFeedback.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">
                  <FaChevronDown />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlack py-1 text-base shadow-lg ring-1 ring-themeBlackDeep focus:outline-none">
                  {feedbackType.map((service, serviceIdx) => (
                    <Listbox.Option
                      key={serviceIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none px-4 py-2 ${
                          active ? 'bg-themeBorderBlue' : ''
                        }`
                      }
                      value={service}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {service.name}
                          </span>
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <textarea
            placeholder="How can we improve?"
            value={messageFeedback}
            onChange={(e) => setMessageFeedback(e.target.value)}
            rows={4}
            autoComplete="off"
            className="w-full resize-none rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
        </div>
        <Button
          disabled={
            !nameFeedback ||
            !emailFeedback ||
            !emailRegex.test(emailFeedback) ||
            !messageFeedback
          }
          onClick={() => sendMail('feedback')}
          className="h-12 w-full md:!w-64"
          loading={feedbackloading}
        >
          Submit Feedback
        </Button>
        <ResponseDialog
        call={() => setDialog(false)}
        isOpen={dialog}
        message={message}
        setIsOpen={setDialog}
        type={dialogType}
        popupTitle="Submission"
      />
      </div>
    </div>
  )
}
