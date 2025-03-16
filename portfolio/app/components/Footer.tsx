import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2025{' '}
          <a href="/" className="hover:underline text-gold">
            Mark Duraid
          </a>{' '}
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}