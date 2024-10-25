import Image from 'next/image'
import Tooltip from '../shared/Tooltip'

const RoadmapImage = () => {
  return (
    <div className="relative w-full pt-20 md:px-16 md:pb-24">
      <div className="relative mx-auto w-fit">
        <Image
          src="/Homepage/Roadmap/line.svg"
          width={1044}
          height={644}
          alt=""
          className="relative z-0 hidden md:block"
        />
        <Image
          src="/Homepage/Roadmap/phoneLine.svg"
          width={332}
          height={597}
          alt=""
          className="relative z-0 block md:hidden"
        />
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 1: Building Foundation
              </div>
              <ul className="list-inside list-disc">
                <li>Launch CG AI Beta</li>
                <li>Set up E-Learning Platform</li>
                {/* <li>CG AI Beta Live for early adopters</li> */}
                <li>Learn to Earn Model Initiation</li>
                <li>Launch of CG Incubator Lab</li>
                <li>Community Formation</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phases (1).png"
            width={523}
            height={175}
            alt=""
            className="absolute -left-[8%] -top-[12%] z-1 w-full md:-left-[10%] md:-top-[8%] md:w-[50%]"
          />
        </Tooltip>
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 2: Innovation & Expansion
              </div>
              <ul className="list-inside list-disc">
                <li>Launch Paper Trading</li>
                <li>Expand Educational Content Library</li>
                <li>Initiate Global Marketing Campaign</li>
                <li>Enhancement of AI Capabilities</li>
                <li>Onboard Strategic Partners</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phases (2).png"
            width={512}
            height={265}
            alt=""
            className="absolute -right-[15%] top-[10%] z-1 w-full md:-right-[12%] md:top-[5%] md:w-[48%]"
          />
        </Tooltip>
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 3: Tech Integration
              </div>
              <ul className="list-inside list-disc">
                <li>Rollout Mobile App for Users</li>
                <li>Upgrade Security Protocols</li>
                <li>Refine User Interface & Experience</li>
                <li>Launch v1 of AI tools</li>
                <li>Develop CryptoGrad Launchpad</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phases (3).png"
            width={563}
            height={283}
            alt=""
            className="absolute -left-[18%] bottom-[22%] z-1 w-full md:bottom-[9%] md:left-[5%] md:w-[53%]"
          />
        </Tooltip>
        <Tooltip
          title={
            <div className="flex flex-col gap-2 p-3">
              <div className="text-2xl font-bold">
                Phase 4: Advanced Development
              </div>
              <ul className="list-inside list-disc">
                <li>Launch Blockchain-Based Certifications</li>
                <li>Introduce Advanced Data Dashboards</li>
                <li>Integrate AI-Driven Market Predictions</li>
                <li>Develop Advanced Trading Tools</li>
                <li>Deploy Interactive Learning Simulations</li>
              </ul>
            </div>
          }
        >
          <Image
            src="/Homepage/Roadmap/phases (4).png"
            width={541}
            height={190}
            alt=""
            className="absolute -bottom-[5%] -right-[15%] z-1 w-full md:-bottom-[15%] md:right-[10%] md:w-[52%]"
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default RoadmapImage
