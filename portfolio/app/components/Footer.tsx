import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{' '}
          <a href="/" className="hover:underline">
            [Name]
          </a>{' '}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
