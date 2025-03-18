import Image from "next/legacy/image";
import MarkDuraidpic from '../public/images/niwcpactp.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-custom min-h-screen"> {/* Added min-h-screen */}
      <main className="flex items-center justify-center py-16 pt-12 pb-20 sm:pb-16 md:pb-0"> {/* Removed mt-16 */}
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
          <p className="text-lg font-bold text-white pt-20 sm:pt-16 md:pt-0">— Hello</p>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              I'm <span className="text-yellow-500">Mark</span> Duraid
            </h1>
            <p
              className="mb-6 text-sm font-normal text-white lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            >
              A Security Analyst and System Administrator with a Computer Science background and a passion for Cybersecurity, based in the United States. I focus on fortifying and protecting advanced applications and systems to ensure robust security and operational integrity.
            </p>
            <div className="mt-6 ml-1">
              <ul className="flex items-center text-sm font-medium text-white">
                <li className="mr-6">
                  <a
                    href="https://www.linkedin.com/in/markduraid"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <span className="px-2 text-gold">
                      <FaLinkedin />
                    </span>
                    <span className="text-gold">LinkedIn</span>
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="https://github.com/markduraid21"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <span className="px-2 text-gold">
                      <FaGithub />
                    </span>
                    <span className="text-gold">GitHub</span>
                  </a>
                </li>
                <li className="mr-6">
                  <a
                    href="https://www.instagram.com/mark_duraid/?hl=en"
                    target="_blank" rel="noopener noreferrer"
                    className="hover:underline flex items-center"
                  >
                    <span className="px-2 text-gold">
                      <FaInstagram />
                    </span>
                    <span className="text-gold">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <div className="relative w-full h-auto">
              <Image
                src={MarkDuraidpic}
                alt="Mark Duraid Logo"
                width={600}
                height={800}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
