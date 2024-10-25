'use client'

import { INavDropdown } from '@/types/navbar'
import { Disclosure, Transition } from '@headlessui/react'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa'

const NavAccordion = ({ title, menuItems, setOpen }: INavDropdown) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex w-full flex-col gap-2">
          <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-2 py-1 font-medium transition-all hover:bg-themeBgBlack hover:text-themeVioletText">
            {title}
            <FaChevronDown
              className={`!text-sm transition-all hover:text-themeVioletText ${
                open && 'rotate-180'
              }`}
            />
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
            <Disclosure.Panel className="flex w-full flex-col gap-2 rounded-md bg-themeBgBlack/40 p-1 text-sm backdrop-blur-md">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.path}
                  target={item.target ? '_blank' : '_self'}
                  onClick={() => !item.target && setOpen && setOpen(false)}
                  className="flex w-full items-center rounded-md px-2 py-1 text-sm transition-all hover:bg-themeBgBlack hover:text-themeVioletText"
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

export default NavAccordion
