import Image from "next/legacy/image"
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
              'Security Automation Engineer Intern | January 2024 - March 2024',
              'Utilized GO to categorize and implement various Security Technical Implementation Guide (STIG) benchmarks, enhancing the overall security posture of target systems. Enhanced CyberKnight software by incorporating the Cybersecurity Vulnerability Analysis (CVA) process. Developed a custom application taking in ‘Stig’ objects, facilitating the comparison of vulnerability statuses. Automated routine tasks within the CyberKnight project, showcasing proficiency in security automation and the ability to optimize processes for increased efficiency. Facilitated regular coordination by participating in bi-weekly meetings with the project manager, security team, and developers. These sessions were instrumental in fostering effective communication, aligning poet goals, and addressing security considerations within the development process. Contributed to the evaluation of new security tools and technologies, staying informed about advancements in the field and recommending improvements to the existing security infrastructure.'
            )}
            {renderExperience(
              'Naval Information Warfare Center Pacific',
              'Machine Learning Engineer NREIP Intern | October 2023 - December 2023',
              'Spearheaded the development of a multi-tiered NLP (Natural Language Processing) application employing HTML, JavaScript, and Python with Node.js, leveraging trunk-based development methodologies. Orchestrated agile development framework, conducting bi-weekly meetings to discuss updates, solicit feedback, and ensure alignment with project objectives. Engineered an information extraction system utilizing Python for data scraping from diverse file formats (PDF, DOCX, XLSX), demonstrating adeptness in data parsing and extraction. Demonstrated expertise in integrating disparate technologies to deliver a cohesive solution, where Python served the scraping function while HTML and JavaScript were instrumental in a user friendly interface.'
            )}
            {renderExperience(
              'Naval Information Warfare Center Pacific',
              'Security Software Engineer Intern | June 2023—August 2023',
              'Worked as a Full Stack Developer to create a specialized tool utilizing RMF (Risk Management Framework) for the Navy, streamlining the process of managing and assessing cybersecurity risks for critical systems. Gained valuable experience in Agile Development methodologies, ensuring efficient and collaborative project management. Demonstrated proficiency in Trunk Based Development, promoting continuous integration and streamlined codebase maintenance. Collaborated effectively with a team to successfully deliver a project using RMF Step 2. Led daily standups/meetings, fostering clear communication and coordination among team members. Participated in the creation of wireframes, providing a visual blueprint for the project before commencing development. Followed set designs to maintain consistency in UI/UX and deliver a user-friendly application. Conducted regular user interviews. Gathering insights and feedback to shape the app’s design and functionality based on user preferences.'
            )}
            {renderExperience(
              'Grossmont-Cuyamaca Community College District',
              'Financial Aid Student Ambassador | August 2021—Present',
              'I\'ve guided students through the FAFSA application process by providing personalized one-on-one assistance, offering translations, and leveraging financial aid software to keep them informed about their file statuses. Additionally, I\'ve organized educational events to clarify financial aid concepts. Furthermore, I\'ve contributed to team success by training new members in documentation practices and \'SAM\' financial aid system, fostering effective teamwork.'
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