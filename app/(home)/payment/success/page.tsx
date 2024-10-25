import Image from 'next/image'
import React from 'react'

export default function Congratulations(){
  return (
    <div className="relative mx-auto flex h-[100vh] flex-col items-center justify-center gap-8 text-center">
      <div className="mx-auto flex flex-col items-center justify-center text-center">
        <Image
          src="/congratsRIght.svg"
          width={300}
          height={300}
          alt="congratulations"
          className="w-[10rem]"
        />
        <div className="mmd:text-6xl text-2xl font-bold z-50">Congratulations</div>
        <div className="my-4 mmd:text-3xl text-base text-white/70 z-50">
          Welcome to Cryptograd Network
        </div>
      </div>
      <div className=" mmd:text-xl text-xs text-white z-50">
        Please wait; you&apos;ll soon be directed to the AI dashboard.
      </div>
      <Image
        src="/ellipse.svg"
        width={1920}
        height={1080}
        alt="congratulations"
        className="absolute z-0 hidden max-h-[100vh] mmd:block"
      />

      <Image
        src="/payment/pink.svg"
        width={300}
        height={300}
        alt="red"
        className="absolute left-0 mmd:w-32 w-24 top-[50%]"
      />
      <Image
        src="/payment/blue.svg"
        width={300}
        height={300}
        alt="red"
        className="absolute -top-1 left-0 mmd:w-36 w-24"
      />
      <Image
        src="/payment/red.svg"
        width={300}
        height={300}
        alt="red"
        className="absolute right-0 -top-1 mmd:w-40 w-20" 
      />
      <Image
        src="/payment/purple.svg"
        width={300}
        height={300}
        alt="red"
        className="absolute bottom-0 right-0 mmd:w-44 w-32"
      />
       <Image
        src="/payment/coin1.png"
        width={300}
        height={300}
        alt="red"
        className="absolute top-0 right-[25%] mmd:w-32 w-20"
      />
      <Image
        src="/payment/coin2.png"
        width={300}
        height={300}
        alt="red"
        className="absolute bottom-0 right-[75%] mmd:w-32 w-20"
      />
      
    </div>
  )
}
