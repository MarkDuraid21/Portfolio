import Image from 'next/image'
import MarkDuraidpic from '../../public/images/MarkDuraid.png'

export default function Home() { 

  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              My <span className="text-red-600">Experience</span>
            </h1>
            {renderExperience(
              'Naval Information Warfare Center Pacific',
              'Security Software Engineer Intern | June 2023—August 2023',
              'Worked as a Full Stack Developer to create a specialized tool utilizing RMF (Risk Management Framework) for the Navy, streamlining the process of managing and assessing cybersecurity risks for critical systems. Gained valuable experience in Agile Development methodologies, ensuring efficient and collaborative project management. Demonstrated proficiency in Trunk Based Development, promoting continuous integration and streamlined codebase maintenance. Collaborated effectively with a team to successfully deliver a project using RMF Step 2. Led daily standups/meetings, fostering clear communication and coordination among team members. Participated in the creation of wireframes, providing a visual blueprint for the project before commencing development. Followed set designs to maintain consistency in UI/UX and deliver a user-friendly application. Conducted regular user interviews. Gathering insights and feedback to shape the app’s design and functionality based on user preferences.'
            )}
            {renderExperience(
              'Grossmont-Cuyamaca Community College District',
              'Financial Aid Student Ambassador | Augest 2021—Present',
              'I created a tool to support Site Assistance Visits for Command Cyber Readiness Inspections. I provided timely updates, maintained data security, and collaborated with cross-functional teams to meet user requirements. I also designed wireframes to improve usability, significantly reducing PowerPoint generation time. I was responsible for organizing project management activities, ensuring project success.'
            )}

            <div className="mt-6 ml-1">
              {' '}
              {/* Increased margin-top and adjusted margin-left */}
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
function renderExperience(title: string, role: string, description: string) {
  return (
    <>
      <h2
        className="text-md font-bold text-gray-900 lg:text-md"
        style={{ lineHeight: '2' }}
      >
        {title}
      </h2>
      <p
        className="mb-2 text-sm font-italic text-gray-500"
        style={{ lineHeight: '2' }}
      >
        {role}
      </p>
      <p
        className="mb-2 text-sm font-italic text-gray-900"
        style={{ lineHeight: '2' }}
      >
        {description}
      </p>
    </>
  )
}