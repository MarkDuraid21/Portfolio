'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import KobiLogo from '../../public/images/kobibell_logo.svg'

export default function Navbar() {
  const currentRoute = usePathname()

  return (
    <nav className=" w-full z-20 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image src={KobiLogo} alt="Kobi Bell Logo" className="h-8 mr-3" />
          <span className="self-center text-2xl font-semibold text-black space-nowrap ">
            Kobi Bell
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 justify-center m-0">
            {' '}
            <li>
              <a
                href="/"
                className={
                  currentRoute === '/'
                    ? 'block py-2 pl-3 pr-4 text-red-500 rounded md:bg-transparent md:p-0 '
                    : 'block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-red-700 md:hover:bg-transparent md:p-0'
                }
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={
                  currentRoute === '/about'
                    ? 'block py-2 pl-3 pr-4 text-red-500 rounded md:bg-transparent md:p-0 '
                    : 'block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-red-700 md:hover:bg-transparent md:p-0'
                }
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/skills"
                className={
                  currentRoute === '/skills'
                    ? 'block py-2 pl-3 pr-4 text-red-500 rounded md:bg-transparent md:p-0 '
                    : 'block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-red-700 md:hover:bg-transparent md:p-0'
                }
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/education"
                className={
                  currentRoute === '/education'
                    ? 'block py-2 pl-3 pr-4 text-red-500 rounded md:bg-transparent md:p-0 '
                    : 'block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-red-700 md:hover:bg-transparent md:p-0'
                }
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="/experience"
                className={
                  currentRoute === '/experience'
                    ? 'block py-2 pl-3 pr-4 text-red-500 rounded md:bg-transparent md:p-0 '
                    : 'block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-red-700 md:hover:bg-transparent md:p-0'
                }
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={
                  currentRoute === '/contact'
                    ? 'block py-2 pl-3 pr-4 text-red-500 rounded md:bg-transparent md:p-0 '
                    : 'block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-red-700 md:hover:bg-transparent md:p-0'
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>{' '}
    </nav>
  )
}
