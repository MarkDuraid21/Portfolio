import Image from "next/image";
import MarkDuraidpic from '../../public/images/MarkDuraid.png';
import SDSUImage from '../../public/images/SDSULogo.png';
import GrossmontImage from '../../public/images/GrossmontL.png';

export default function Home() {
  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              My <span className="text-red-600">Education</span>
            </h1>
            {renderEducation(
              'San Diego State University',
              'Bachelor of Science in Computer Science, 3.6 GPA | Graduated: May 2024',
              true 
            )}
            {renderEducation(
              'Grossmont College',
              'Associate of Science in Computer Science, 3.8 GPA | Graduated: June 2022',
              true 
            )}
            <div className="mb-2 text-sm font-normal text-gray-900 lg:text-sm dark:text-gray-400">
              <span className="font-bold">Relevant coursework:</span><br />
              <span className="text-gray-600"> 
              Computer Security, Computer Programming I & II, Networking I & II, Intro to Information Security, Website Development and Organization. Introduction to UNIX/LINUX – Introduction to Databases – Introduction to Software Systems
              </span>
            </div>
            <div className="flex items-center">
              <div style={{ display: 'flex' }}>
                <Image
                  src={SDSUImage}
                  alt="SDSU Logo"
                  className="h-8 mr-3"
                  layout="fixed"
                  width={150} 
                  height={150} 
                />
                <Image
                  src={GrossmontImage}
                  alt="Grossmont College Logo"
                  className="h-8 mr-3"
                  layout="fixed"
                  width={150} 
                  height={150} 
                />
              </div>
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

function renderEducation(school: string, details: string, isGray: boolean) {
  return (
    <>
      <div className="flex items-center">
        <h2
          className="text-md font-bold text-gray-900 lg:text-md"
          style={{ lineHeight: '1.5' }} 
        >
          {school}
        </h2>
      </div>
      <p
        className={`mb-2 text-sm font-italic ${isGray ? 'text-gray-600' : 'text-gray-900'}`}
        style={{ lineHeight: '2', marginTop: '-0.25rem' }} 
      >
        {details}
      </p>
    </>
  )
}
