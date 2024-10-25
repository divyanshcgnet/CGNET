import Image from 'next/image'
import Link from 'next/link'

const Brand = () => {
  return (
    <Link href={'/'} className="flex items-center gap-2">
      <Image src={'/Logo.png'} height={32} width={200} alt="brand-logo" />
    </Link>
  )
}

export default Brand
