import Image from "next/legacy/image"
import MarkDuraidpic from '../../public/images/MarkDuraid.png'

export default function Home() { 

  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Contact <span className="text-red-600">Me</span>
            </h1>
            {/* Here is the iframe for the Google Form */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdox06f0kpFqg9vrMU3-K2vg03rFQDRel0Ev3bZ8JamRxa5QQ/viewform?embedded=true"
              width="100%"  
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ minHeight: '500px' }} 
            >
              Loading…
            </iframe>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <Image
              src={MarkDuraidpic}
              alt="Mark Duraid Logo"
              className="h-8 mr-3"
              layout="intrinsic"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
