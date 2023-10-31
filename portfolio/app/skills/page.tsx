import Image from 'next/image'
import KobiBellPic from '../../public/images/kobibell2.png'
import { FaBook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  const backgroundStyle = {
    backgroundImage: `url('/images/Background.jpg')`, // Ensure the path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div style={backgroundStyle}>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              My <span className="text-red-600">Skills</span>
            </h1>
            <p
              className="mb-6 text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            ></p>

            <div className="mt-6 ml-1">
              {' '}
              {/* Increased margin-top and adjusted margin-left */}
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <Image
              src={KobiBellPic}
              alt="Kobi Bell Logo"
              className="h-8 mr-3"
              layout="responsive"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
