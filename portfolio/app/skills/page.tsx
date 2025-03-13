import Image from "next/image";
import { ExternalLink } from "lucide-react"; 
import MarkDuraidpic from "../../public/images/MarkDuraid.png";

const certificates = [
  {
    name: "CompTIA Security+ March 2025",
    link: "https://www.udemy.com/certificate/UC-7afadc86-d4df-4193-b4a2-8ff085ed4d80/", 
  },
  {
    name: "Microsoft Security Fundamentals March 2025",
    link: "https://www.udemy.com/certificate/UC-c519023f-2ed3-4adb-a877-83967f5a9e7b/", 
  },
  {
    name: "Cyber Awareness Challenge July 2024",
    link: "/images/cyberawareness.png",
  },
  {
    name: "NREIP Completion August 2023",
    link: "/images/NreipCert.png",
  },

];

export default function Home() { 
  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl">
              My <span className="text-red-600">Skills</span>
            </h1>

            <div className="text-sm font-normal text-gray-500 dark:text-gray-400 space-y-4">
              {/* Skills Section */}
              <div>
                <h2 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-gray-100">
                  Technical <span className="text-red-600">Skills</span>
                </h2>
                <ul className="space-y-1">
                  <li>❖ <strong>Programming Languages:</strong> Python, JavaScript, HTML, CSS, C++, Java, GO</li>
                  <li>❖ <strong>Version Control & Development Tools:</strong> Git/Github, Bootstrap, Electron</li>
                  <li>❖ <strong>Cybersecurity & Compliance Tools:</strong> ACAS, STIG Viewer, Kali Linux, Nmap, Metasploit, Vulnerability Assessment, SSH, SCP, FTP</li>
                  <li>❖ <strong>Operating Systems:</strong> UNIX/Linux, Windows Server, MacOS</li>
                  <li>❖ <strong>Security Implementation:</strong> STIG Compliance, System Hardening, Vulnerability Remediation, Risk Assessment</li>
                  <li>❖ <strong>Web Development & Security:</strong> Website and Application Development, Web Security Practices (HTTPS, CORS, XSS prevention)</li>
                  <li>❖ <strong>Adobe Creative Suite:</strong> Photoshop, Illustrator</li>
                  <li>❖ <strong>Microsoft Office:</strong> Excel, PowerPoint, Word</li>
                  <li>❖ <strong>Development Methodologies:</strong> Agile, Trunk-based Development</li>
                  <li>❖ <strong>Professional Skills:</strong> Time management, Communication, Cross-functional Collaboration, Quick learning</li>
                </ul>
              </div>

              {/* Languages Section */}
              <div>
                <h2 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-gray-100">
                  Languages
                </h2>
                <ul className="space-y-1">
                  <li>❖ English</li>
                  <li>❖ Arabic</li>
                </ul>
              </div>

              {/* Certifications Section */}
              <div>
                <h2 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-gray-100">
                  Certifications
                </h2>
                <ul className="mt-2 space-y-2">
                  <li>❖ CompTIA Network+ (In Progress)</li>
                  {certificates.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <span>❖ {cert.name}</span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 border border-black text-black px-2 py-0.5 text-xs font-semibold rounded flex items-center hover:bg-gray-100 transition-all"
                      >
                        Show Credential
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="md:w-1/2 md:pl-8">
            <Image
              src={MarkDuraidpic}
              alt="Mark Duraid Logo"
              layout="intrinsic"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
