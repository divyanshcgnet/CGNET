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
import MessageDialog from '@/components/shared/MessageDialog'

const services = [
  {
    name: 'Chat AI',
  },
  {
    name: 'CG Token',
  },
]

const messageType = [
  {
    name: 'Review',
  },
  {
    name: 'Suggestion',
  },
  {
    name: 'Support',
  },
]

const Contact = () => {
  const [selected, setSelected] = useState({ name: 'Chat AI' })
  const [selectedMessageType, setSelectedMessageType] = useState({
    name: 'Support',
  })
  const [name, setName] = useState('')
  const [name1, setName1] = useState('')
  const [loading, setLoading] = useState(false)
  const [telegram, setTelegram] = useState('')
  const [discord, setDiscord] = useState('')
  const [email, setEmail] = useState('')
  const [email1, setEmail1] = useState('')
  const [message, setMessage] = useState('')
  const [message1, setMessage1] = useState('')
  const [dialog, setDialog] = useState(false)
  const [dialogType, setDialogType] = useState(DialogType.SUCCESS)
  const search = useSearchParams()

  const sendMail = async () => {
    setLoading(true)
    try {
      const data = {
        telegramUsername: telegram,
        discordUsername: discord,
        messageType: 'Contact Us',
        userEmail: email,
        messageContent: message,
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
      setLoading(false)
      setTelegram('')
      setDiscord('')
      setName('')
      setEmail('')
      setMessage('')
      setDialog(true)
      setDialogType(DialogType.SUCCESS)
    } catch (error) {
      setLoading(false)
      setDialog(true)
      setDialogType(DialogType.FAILED)
    }
  }

  useEffect(() => {
    const paramVal = search.get('messageType')
    if (!paramVal) return
    setSelectedMessageType({ name: paramVal })
  }, [])

  return (
    <div className="pageHeight flex w-full flex-col gap-16 p-4 md:p-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-2xl font-semibold">Schedule A Call</div>
        <div className="w-full">
          Sync your schedules, crank up the communication! Schedule a call with
          cryptograd AI support team.
        </div>
        {/*<Listbox value={selected} onChange={setSelected}>*/}
        {/*  <div className="relative w-full">*/}
        {/*    <Listbox.Button className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-left text-lg outline-none">*/}
        {/*      <span className="block truncate">{selected.name}</span>*/}
        {/*      <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">*/}
        {/*        <FaChevronDown />*/}
        {/*      </span>*/}
        {/*    </Listbox.Button>*/}
        {/*    <Transition*/}
        {/*      as={Fragment}*/}
        {/*      leave="transition ease-in duration-200"*/}
        {/*      leaveFrom="opacity-100"*/}
        {/*      leaveTo="opacity-0"*/}
        {/*    >*/}
        {/*      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlack py-1 text-base shadow-lg ring-1 ring-themeBlackDeep focus:outline-none">*/}
        {/*        {services.map((service, serviceIdx) => (*/}
        {/*          <Listbox.Option*/}
        {/*            key={serviceIdx}*/}
        {/*            className={({ active }) =>*/}
        {/*              `relative cursor-default select-none px-4 py-2 ${*/}
        {/*                active ? 'bg-themeBorderBlue' : ''*/}
        {/*              }`*/}
        {/*            }*/}
        {/*            value={service}*/}
        {/*          >*/}
        {/*            {({ selected }) => (*/}
        {/*              <>*/}
        {/*                <span*/}
        {/*                  className={`block truncate ${*/}
        {/*                    selected ? 'font-medium' : 'font-normal'*/}
        {/*                  }`}*/}
        {/*                >*/}
        {/*                  {service.name}*/}
        {/*                </span>*/}
        {/*              </>*/}
        {/*            )}*/}
        {/*          </Listbox.Option>*/}
        {/*        ))}*/}
        {/*      </Listbox.Options>*/}
        {/*    </Transition>*/}
        {/*  </div>*/}
        {/*</Listbox>*/}
        <input
          type="text"
          placeholder="Name"
          required
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email1}
          onChange={(e) => setEmail1(e.target.value)}
          className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
        />
        <textarea
          placeholder="A brief of your reason to schedule a call"
          rows={4}
          autoComplete="off"
          value={message1}
          onChange={(e) => setMessage1(e.target.value)}
          className="w-full resize-none rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
        />
        {!name1 || !email1 || !emailRegex.test(email1) || !message1 ? (
          <Button
            disabled={true}
            onClick={() => {}}
            className="h-12 w-full md:!w-64"
          >
            Schedule Now
          </Button>
        ) : (
          <Link
            href={'https://calendly.com/cryptograd/30min'}
            target="_blank"
            rel="noreferrer noopener"
            className={`flex h-12 min-h-[2.5rem] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-themeViolet to-themeBlue px-4 text-lg font-semibold transition-all duration-700 hover:from-themeBlue hover:to-themeBlue md:!w-64 md:px-6`}
          >
            Schedule Now
          </Link>
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="w-full text-2xl font-semibold">Send Us A Message</div>
        <div className="w-full">
          The quickest way to our hearts? Send us a message and we will get back
          to you within 48 hours.
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
          {/*<Listbox*/}
          {/*  value={selectedMessageType}*/}
          {/*  onChange={setSelectedMessageType}*/}
          {/*>*/}
          {/*  <div className="relative w-full">*/}
          {/*    <Listbox.Button className="w-full rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-left text-lg outline-none">*/}
          {/*      <span className="block truncate">*/}
          {/*        {selectedMessageType.name}*/}
          {/*      </span>*/}
          {/*      <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center pr-2">*/}
          {/*        <FaChevronDown />*/}
          {/*      </span>*/}
          {/*    </Listbox.Button>*/}
          {/*    <Transition*/}
          {/*      as={Fragment}*/}
          {/*      leave="transition ease-in duration-200"*/}
          {/*      leaveFrom="opacity-100"*/}
          {/*      leaveTo="opacity-0"*/}
          {/*    >*/}
          {/*      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-themeBlack py-1 text-base shadow-lg ring-1 ring-themeBlackDeep focus:outline-none">*/}
          {/*        {messageType.map((service, serviceIdx) => (*/}
          {/*          <Listbox.Option*/}
          {/*            key={serviceIdx}*/}
          {/*            className={({ active }) =>*/}
          {/*              `relative cursor-default select-none px-4 py-2 ${*/}
          {/*                active ? 'bg-themeBorderBlue' : ''*/}
          {/*              }`*/}
          {/*            }*/}
          {/*            value={service}*/}
          {/*          >*/}
          {/*            {({ selected }) => (*/}
          {/*              <>*/}
          {/*                <span*/}
          {/*                  className={`block truncate ${*/}
          {/*                    selected ? 'font-medium' : 'font-normal'*/}
          {/*                  }`}*/}
          {/*                >*/}
          {/*                  {service.name}*/}
          {/*                </span>*/}
          {/*              </>*/}
          {/*            )}*/}
          {/*          </Listbox.Option>*/}
          {/*        ))}*/}
          {/*      </Listbox.Options>*/}
          {/*    </Transition>*/}
          {/*  </div>*/}
          {/*</Listbox>*/}
          <textarea
            placeholder="How can we help?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            autoComplete="off"
            className="w-full resize-none rounded-lg border-2 border-white/20 bg-inherit px-4 py-3 text-lg outline-none"
          />
        </div>
        <Button
          disabled={!name || !email || !emailRegex.test(email) || !message}
          onClick={sendMail}
          className="h-12 w-full md:!w-64"
        >
          Submit Form
        </Button>
        <MessageDialog
          call={() => setDialog(false)}
          isOpen={dialog}
          message={
            "Thank you for getting in touch. We'll get back to you soon."
          }
          setIsOpen={setDialog}
          type={dialogType}
        />
      </div>
    </div>
  )
}

export default Contact
