import Image from "next/legacy/image";
import MarkDuraidpic from '../public/images/MarkDuraid.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
              A Computer Science Graduate and Cybersecurity Enthusiast located in the United States, looking to fortify and protect sophisticated applications and systems.
            </p>
            <div className="mt-6 ml-1">
              <ul className="flex items-center text-sm font-medium text-gray-500">
                <li className="mr-6">
                  <a
                    href="https://www.linkedin.com/in/markduraid"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <span className="px-2">
                      <FaLinkedin style={{ color: 'teal' }} />
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
                      <FaGithub style={{ color: 'purple' }} />
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
                      <FaInstagram style={{ color: 'red' }} />
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
