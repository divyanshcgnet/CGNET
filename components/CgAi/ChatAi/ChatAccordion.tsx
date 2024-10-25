'use clientP'

import { Disclosure } from '@headlessui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface IAccordion {
  title: string
  togglePanels: any
  index: number
  actions: {
    title: string
    prompt: string
  }[]
  openAiCall: (message?: string) => Promise<void>
}

export default function ChatAccordion({
  title,
  togglePanels,
  index,
  actions,
  openAiCall,
}: IAccordion) {
  return (
    <Disclosure>
      {(panel) => {
        const { open, close } = panel
        return (
          <div
            // className={
            //   open
            //     ? `flex h-fit flex-col gap-3 rounded-2xl bg-themeBgBlack p-4 shadow-lg shadow-themeBorderBlue/20`
            //     : `h-fit w-fit rounded-md border border-white/10 px-2 py-1 md:w-full md:rounded-xl md:px-4 md:py-2`
            // }
            className={`h-fit w-fit flex-grow rounded-md border border-white/10 py-1 md:w-full md:rounded-xl md:py-2 ${
              open ? 'bg-[#22222C]' : ''
            }`}
          >
            <Disclosure.Button
              onClick={() => {
                if (!open) {
                  close()
                }

                togglePanels({ ...panel, key: index })
              }}
              className="flex w-full items-center justify-between px-2 text-left text-xs font-semibold md:px-4 md:text-xl"
            >
              <span className="font-semibold text-[#918FFF] md:text-xl">
                {title}
              </span>
              {open ? (
                <FaChevronUp className="text-[#918FFF]" />
              ) : (
                <FaChevronDown className="text-[#918FFF]" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="mt-2 flex flex-col">
              {actions.map((action) => (
                <button
                  className="border-t border-white/10 px-2 py-2 text-left text-xs md:px-4 md:text-lg"
                  key={action.title}
                  onClick={() => openAiCall(action.prompt)}
                >
                  {action.title}
                </button>
              ))}
            </Disclosure.Panel>
          </div>
        )
      }}
    </Disclosure>
  )
}
