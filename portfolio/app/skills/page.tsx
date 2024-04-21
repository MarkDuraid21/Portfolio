import Image from "next/legacy/image";
import MarkDuraidpic from '../../public/images/MarkDuraid.png';

export default function Home() { 
  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              <span>My </span><span className="text-red-600">Skills</span>
            </h1>
            <p
              className="text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400"
              style={{ lineHeight: '2' }}
            >
              {/* Skills with one color */}
              ❖ Python, JavaScript, HTML, CSS, C++, Java, GO<br/>
              ❖ Git/Github, BootStrap, Electron, STIG Viewer<br/>
              ❖ Adobe Photoshop, Adobe Illustrator<br/>
              ❖ Microsoft: Excel, Powerpoint, Word<br/>
              ❖ UNIX/Linux familiarity<br/>
              ❖ Website and Application Development<br/>
              ❖ Web Security Practices (HTTPS, CORS, XSS prevention)<br/>
              ❖ Agile Development methodologies<br/>
              ❖ Trunk-based Development<br/>
              ❖ Time management, Communication, Teamwork, Quick learner <br/>
              {/* Skills with another color */}
              <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900">
                <span>My </span><span className="text-red-600">Languages</span>
              </h2>
              ❖ English<br/>
              ❖ Arabic<br/>
              ❖ Aramaic (Chaldean)<br/>
              <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900">
                <span>My </span><span className="text-red-600">Certifications</span>
              </h2>
              ❖ CompTIA Security+ (in progress)<br/>
              ❖ Cyber Awareness Challenge May 2023<br/>
              ❖ NREIP Completion August 2023
            </p>
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