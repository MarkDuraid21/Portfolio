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
              ❖ <strong>Programming Languages:</strong> Python, JavaScript, HTML, CSS, C++, Java, GO<br/>
              ❖ <strong>Version Control & Development Tools:</strong> Git/Github, BootStrap, Electron<br/>
              ❖ <strong>Cybersecurity & Compliance Tools:</strong> ACAS, STIG Viewer, Kali Linux, Nmap,   Metasploit, Vulnerability Assessment, SSH, SCP, FTP<br/>
              ❖ <strong>Operating Systems:</strong> Advanced familiarity with UNIX/Linux, Windows Server, MacOS<br/>
              ❖ <strong>Security Implementation:</strong> STIG Compliance, System Hardening, Vulnerability   Remediation, Risk Assessment<br/>
              ❖ <strong>Web Development & Security:</strong> Website and Application Development, Web Security   Practices (HTTPS, CORS, XSS prevention)<br/>
              ❖ <strong>Adobe Creative Suite:</strong> Photoshop, Illustrator<br/>
              ❖ <strong>Microsoft Office:</strong> Excel, PowerPoint, Word<br/>
              ❖ <strong>Development Methodologies:</strong> Agile, Trunk-based Development<br/>
              ❖ <strong>Professional Skills:</strong> Time management, Communication, Cross-functional   Collaboration, Quick learning<br/>
              {/* Skills with another color */}
              <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900">
                <span>My </span><span className="text-red-600">Languages</span>
              </h2>
              ❖ English<br/>
              ❖ Arabic<br/>
              <h2 className="mb-2 text-xl font-extrabold leading-none tracking-tight text-gray-900">
                <span>My </span><span className="text-red-600">Certifications</span>
              </h2>
              ❖ CompTIA Network+ Inprogress<br/>
              ❖ CompTIA Security+ March 2025<br/>
              ❖ Microsft Security Fundamentals March 2025<br/>
              ❖ NREIP Completion August 2023<br/>
              ❖ Cyber Awareness Challenge May 2023
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