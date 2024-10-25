import Faq from '@/components/FAQ/Faq'
import Accordion from '@/components/shared/policy/Accordion'
import Image from 'next/image'

export default function FaqPage() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/Homepage/Community/ellipse.svg"
        alt=""
        className="absolute -bottom-1/2 -top-1/2 z-0 w-full object-contain"
        width={1920}
        height={1920}
      />
      <Faq />
    </div>
  )
}
