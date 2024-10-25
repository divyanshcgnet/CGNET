'use client'

import { INavDropdown } from '@/types/navbar'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const NavDropdown = ({
  title,
  menuItems,
  setOpen,
  className,
}: INavDropdown) => {
  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <div>
        <Menu.Button className="flex w-full items-center justify-center font-medium transition-all hover:text-themeVioletText">
          {title}
          <FaChevronDown className="ml-1.5 !text-sm hover:text-themeVioletText" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-themeBgBlack shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuItems.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link
                    href={item.path}
                    target={item.target ? '_blank' : '_self'}
                    onClick={() => !item.target && setOpen && setOpen(false)}
                    className={`${
                      active ? 'bg-themeViolet text-white' : 'text-white'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                  >
                    {item.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default NavDropdown
