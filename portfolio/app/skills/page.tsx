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
              ❖ Python, JavaScript, HTML, CSS, C++, Java<br/>
              ❖ Git/Github, BootStrap, Electron<br/>
              ❖ Adobe Photoshop, Adobe Illustrator<br/>
              ❖ Microsoft: Excel, Powerpoint, Word<br/>
              ❖ UNIX/Linux familiarity<br/>
              ❖ Website and Application Development<br/>
              ❖ Web Security Practices (HTTPS, CORS, XSS prevention)<br/>
              ❖ Agile Development methodologies<br/>
              ❖ Trunk-based Development<br/>
              ❖ Time managemnt, Communication, Teamwork, Quick learner <br/>
              <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900">Languages</h2>
              ❖ <span className="text-gray-900">English</span><br/>
              ❖ <span className="text-gray-900">Arabic</span><br/>
              ❖ <span className="text-gray-900">Aramaic (Chaldean)</span><br/>
              <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900">Certifications</h2>
              ❖ <span className="text-gray-900">CompTIA Security+ (in progress)<br/></span>
              ❖ <span className="text-gray-900">Cyber Awareness Challenge May 2023<br/></span>
              ❖ <span className="text-gray-900">NREIP Completion August 2023</span>
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
