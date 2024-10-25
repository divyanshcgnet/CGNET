import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'

export const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Stuart Blackman',
      profileLink: 'https://www.trustpilot.com/users/66865ac594fb00680f86430d',
      reviewText:
        'I like how its friendly for beginners and info even given by the AI is specifically designed for different use cases.',
      rating: 5,
      imageSrc: '/trustpilotstar.svg',
    },
    {
      name: 'Charles Evans',
      profileLink: 'https://www.trustpilot.com/users/6677c76307745c3096a3b62f',
      reviewText:
        'Cryptograd has completely transformed my approach to cryptocurrency trading. the AI tools have incredibly helped me understand complex crypto things with ease.',
      rating: 5,
      imageSrc: '/trustpilotstar.svg',
    },
    {
      name: 'Kenneth Carter',
      profileLink: 'https://www.trustpilot.com/users/6677e4f1d305a11e12398a5f',
      reviewText:
        'As a beginner I was overwhelmed by the information and so many courses out there charging 1000s of dollars for a course,  have learned a lot about blockchain through their tools.',
      rating: 5,
      imageSrc: '/trustpilotstar.svg',
    },
  ]

  return (
    <div className="mx-auto my-6 flex lg:flex-row flex-col items-center justify-center gap-4 ">
      {testimonialsData.map((testimonial, index) => (
        <div
          key={index}
          className="lg:w-[25%] w-[50%] space-y-5 rounded-3xl bg-[#20222B] px-5 py-8 min-h-[17rem]"
        >
          <div>
            <Link href={testimonial.profileLink}>
              <span className="underline">{testimonial.name}</span>
            </Link>
            <Image
              src={testimonial.imageSrc}
              alt=" "
              width={100}
              height={100}
              className="float-right w-6"
            />
          </div>
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
          </div>
          <div className='border-l pl-4 border-white/40'>{testimonial.reviewText}</div>
        </div>
      ))}
    </div>
  )
}
