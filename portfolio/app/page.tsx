import Image from 'next/image'
import MarkDuraidpic from '../public/images/MarkDuraid.png'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Home() {


  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg text-font-bold">— Hello</p>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              I'm <span className="text-red-600">Mark</span> Duraid
            </h1>
            <p
              className="mb-6 text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            >
              A Computer Science Student and Cybersecurity
              Enthusiast located in the United States, looking for work around
              the globe.
            </p>
            <a
              href="../public/images/kobibellresume.pdf"
              download
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
            >
              Download Resume
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <div className="mt-6 ml-1">
              {' '}
              {/* Increased margin-top and adjusted margin-left */}
              <ul className="flex items-center text-sm font-medium text-gray-500">
                {/* Adjusted margins */}
                <li className="mr-6">
                  <a
                    href="https://www.linkedin.com/in/markduraid"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <span className="px-2">
                      <FaLinkedin />
                    </span>
                    LinkedIn
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="https://github.com/MarkDuraid21"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <span className="px-2">
                      <FaGithub />
                    </span>
                    GitHub
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="https://www.instagram.com/mark_duraid/?hl=en"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <span className="px-2">
                      <FaInstagram />
                    </span>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <Image
              src={MarkDuraidpic}
              alt="Mark Duraid Logo"
              className="h-8 mr-3"
              layout="responsive"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
