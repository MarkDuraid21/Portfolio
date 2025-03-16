import Image from "next/legacy/image";
import MarkDuraidpic from '../../public/images/MD13bgRemoved.png';

export default function Home() { 
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundImage: "url('/images/6191107.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex-grow flex items-center justify-center mt-16 py-16 pt-12 pb-20 sm:pb-16 md:pb-0">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              About <span className="text-yellow-500">Me</span>
            </h1>
            <p
              className="mb-6 text-sm font-normal text-white lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            >
              I am a dedicated Security Analyst and System Administrator with a strong background in Computer Science and a passion for Cybersecurity. As a first-generation college graduate who pursued a Bachelor's Degree in Computer Science in May 2024, my journey has fueled my commitment to advancing my career in tech. I am excited to make a significant impact in the cybersecurity field, enhancing systems' security and resilience.
            </p>

            <div className="mt-6 ml-1">
              {' '}
            </div>
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