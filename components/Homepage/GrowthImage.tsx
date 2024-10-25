'use client'
import Image from 'next/image'
import Animated from '../shared/Animated'
import { motion } from 'framer-motion'

const GrowthImage = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/Homepage/Growth/refer-earn.png"
        className="w-full"
        width={2097}
        height={1559}
        alt=""
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.4, delay: 0.3, type: 'ease' }}
        // animate={{ opacity: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute -left-12 top-0 !scale-[0.65] overflow-hidden rounded-lg border border-themeTextGrey/30 px-4 py-2 before:absolute before:inset-[0] before:z-0 before:bg-[#1C2833]/80 before:blur md:left-[5%] md:top-[20%] md:scale-100 mmd:scale-75 xl:scale-100"
      >
        <span className={'relative z-1'}>Get extra referral points</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.4, delay: 0.4, type: 'ease' }}
        // animate={{ opacity: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute -right-8 top-[35%] !scale-[0.65] overflow-hidden rounded-lg border border-themeTextGrey/40 px-4 py-2 before:absolute before:inset-[0] before:z-0 before:bg-[#1C2833]/80 before:blur md:right-[5%] md:top-[40%] md:scale-100 mmd:scale-75 xl:scale-100"
      >
        <span className={'relative z-1'}>Access to CG seminars</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.4, delay: 0.5, type: 'ease' }}
        // animate={{ opacity: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="absolute bottom-[12%] left-[20%] !scale-[0.65] overflow-hidden rounded-lg border border-themeTextGrey/40 px-4 py-2 before:absolute before:inset-[0] before:z-0 before:bg-[#1C2833]/80 before:blur md:scale-100 mmd:scale-75 xl:scale-100"
      >
        <span className={'relative z-1'}>All in one knowledge base</span>
      </motion.div>
    </div>
  )
}

export default GrowthImage
