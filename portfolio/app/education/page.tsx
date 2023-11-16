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
              'Bachelor of Science in Computer Science',
              'Graduation: June 2024'
            )}
            {renderEducation(
              'Grossmont College',
              'Computer Science ADT: CSU Associate in Science, 3.8 GPA',
              'June 2019 - June 2022'
            )}
            <p
              className="mb-2 text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            >
              <span className="font-bold text-gray-900">Relevant coursework:</span><br />
              Computer Science: Computer Programming I & II, Networking I & II, Intro to Information Security, Website Development and Organization.
              Introduction to UNIX/LINUX – Introduction to Databases – Introduction to Software Systems
            </p>
            <div className="flex items-center">
              <div style={{ display: 'flex' }}>
                <Image
                  src={SDSUImage}
                  alt="SDSU Logo"
                  className="h-8 mr-3"
                  layout="fixed"
                  width={150} // Adjust width based on aspect ratio
                  height={150} // Adjust height based on aspect ratio
                />
                <Image
                  src={GrossmontImage}
                  alt="Grossmont College Logo"
                  className="h-8 mr-3"
                  layout="fixed"
                  width={150} // Adjust width based on aspect ratio
                  height={150} // Adjust height based on aspect ratio
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

function renderEducation(school: string, degree: string, timeline: string) {
  return (
    <>
      <div className="flex items-center">
        <h2
          className="text-md font-bold text-gray-900 lg:text-md"
          style={{ lineHeight: '2' }}
        >
          {school}
        </h2>
      </div>
      <p
        className="mb-2 text-sm font-italic text-gray-900"
        style={{ lineHeight: '2' }}
      >
        {degree}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{timeline}
      </p>
    </>
  )
}
