'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'

const FaqAccordion = ({ title, body }: { title: string; body: string }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="flex w-full flex-col gap-2 rounded-lg bg-themeDialogBlack px-4 py-2 xl:max-w-[80%]">
          <Disclosure.Button className="group flex w-full items-center justify-between text-left text-xl font-medium transition-all hover:text-themeVioletText">
            {title}
            <FaChevronDown
              className={`!min-w-[1rem] text-sm transition-all group-hover:text-themeVioletText ${
                open && 'rotate-180 text-themeBorderBlue'
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
            <Disclosure.Panel className="flex w-full flex-col gap-2 pt-4">
              {body}
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  )
}

export default FaqAccordion
