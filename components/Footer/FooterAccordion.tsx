'use client'

import { Disclosure, Transition } from '@headlessui/react'
import Link from 'next/link'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'

const FooterAccordion = ({
  title,
  menuItems,
}: {
  title: string
  menuItems: {
    title: string
    url: string
    target: boolean
  }[]
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex w-full flex-col gap-2 border-b border-themeTextGrey/40">
          <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-2 py-1 font-medium transition-all hover:text-themeVioletText">
            {title}
            {open ? (
              <IoIosRemove
                className={`!text-2xl transition-all hover:text-themeVioletText`}
              />
            ) : (
              <IoIosAdd
                className={`!text-2xl transition-all hover:text-themeVioletText`}
              />
            )}
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className="w-full"
          >
            <Disclosure.Panel className="flex w-full flex-col gap-2 rounded-md py-1 text-sm backdrop-blur-md">
              {menuItems.map((item, i) => (
                <Link
                  target={item.target ? '_blank' : '_self'}
                  key={i}
                  href={item.url}
                  className="flex w-full items-center rounded-md px-2 py-1 text-sm transition-all hover:text-themeVioletText"
                >
                  {item.title}
                </Link>
              ))}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}

export default FooterAccordion
