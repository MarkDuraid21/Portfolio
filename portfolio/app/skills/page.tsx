"use client";

import Image from "next/image";
import classNames from 'classnames';

const certificates = [
  { name: "CompTIA Security+ March 2025", image: "/images/SecurityPlus.PNG" },
  { name: "CompTIA Linux+ March 2025", image: "/images/LinuxPlus.PNG" },
  { name: "Microsoft Security Fundamentals March 2025", image: "/images/SecurityFundamentals.PNG" },
  { name: "Cyber Awareness Challenge July 2024", image: "/images/cyberawareness.PNG" },
  { name: "NREIP Completion August 2023", image: "/images/NreipCert.PNG" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-top md:bg-center" style={{ backgroundImage: "url('/images/6191107.jpg')", backgroundSize: 'cover' }}>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white pt-20 sm:pt-16 md:pt-0 md:text-5xl lg:text-6xl">
              <span>My </span><span className="text-yellow-500">Skills</span>
            </h1>
            <div className="text-sm font-normal text-white lg:text-sm dark:text-gray-400 space-y-4">
              <div>
                <h2 className="mb-2 text-xl font-extrabold text-white dark:text-gray-100">
                  Technical <span className="text-yellow-500">Skills</span>
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
              <div>
                <h2 className="mb-2 text-xl font-extrabold text-white dark:text-gray-100">
                  Languages
                </h2>
                <ul className="space-y-1">
                  <li>❖ English</li>
                  <li>❖ Arabic</li>
                </ul>
              </div>
              <div>
                <h2 className="mb-2 text-xl font-extrabold text-white dark:text-gray-100">
                  Certificates
                </h2>
                <ul className="space-y-1">
                  {certificates.map((cert, index) => (
                    <li key={index}>❖ {cert.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-28 sm:pb-16 md:pb-0">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className={classNames("mb-4 rounded-lg border-2 border-yellow-500", {
                    "m-0": cert.name !== "Cyber Awareness Challenge July 2024",
                    "m-0 mb-2": cert.name === "Cyber Awareness Challenge July 2024"
                  })}
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={300}
                    height={200}
                    layout="intrinsic"
                    className="rounded-lg"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}