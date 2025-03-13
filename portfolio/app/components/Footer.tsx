import React from 'react'
export default function Footer() {
  return (
    <footer className="m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{' '}
          <a href="/" className="hover:underline">
            [MarkDuraid]
          </a>{' '}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
