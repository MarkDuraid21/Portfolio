import Image from 'next/image'
import MarkDuraidpic from '../../public/images/MarkDuraid.png'

export default function Home() { 

  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              My <span className="text-red-600">Education</span>
            </h1>
            <p
              className="mb-6 text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            >
              <strong>San Diego State University</strong><br/>
              Bachelor of Science in Computer Science&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Graduation: June 2024<br/>
              <br></br>
              <strong>Grossmont College</strong><br/>
              Computer Science ADT: CSU Associate in Science, 3.8 GPA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;June 2019 - June 2022<br/>
              <br></br>
              <strong>Relevant coursework:</strong><br/>
              Computer Science: Computer Programming I & II, Networking I & II, Intro to Information Security, Website Development and Organization.
              Introduction to UNIX/LINUX – Introduction to Databases – Introduction to Software Systems 

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
