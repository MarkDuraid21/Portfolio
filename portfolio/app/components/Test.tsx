import Image from "next/legacy/image"
import MarkDuraidpic from '../public/images/MarkDuraid.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url('/images/Background.jpg')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div style={backgroundStyle}>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-white">— Hello</p>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              I'm <span className="text-gold">Mark</span> Duraid
            </h1>
            <p
              className="mb-6 text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            >
              A Security Analyst and System Administrator with a Computer Science background and a passion for Cybersecurity, based in the United States. I focus on fortifying and protecting advanced applications and systems to ensure robust security and operational integrity.
            </p>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gold rounded-lg hover:bg-gold-dark focus:ring-4 focus:ring-gold-light dark:focus:ring-gold-dark"
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
              <ul className="flex items-center text-sm font-medium text-gray-500">
                <li className="mr-6">
                  <a
                    href="https://www.linkedin.com/in/mark-duraid-452a30247/"
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
              layout="intrinsic"
            />
          </div>
        </div>
      </main>
    </div>
  )
}