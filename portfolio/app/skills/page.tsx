"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons

const certificates = [
  { name: "CompTIA Security+ March 2025", image: "/images/SecurityPlus.PNG" },
  { name: "Microsoft Security Fundamentals March 2025", image: "/images/SecurityFundamentals.PNG" },
  { name: "Cyber Awareness Challenge July 2024", image: "/images/cyberawareness.PNG" },
  { name: "NREIP Completion August 2023", image: "/images/NreipCert.PNG" },
];

export default function Home() {
  const [visibleCerts, setVisibleCerts] = useState<{ [key: number]: boolean }>({});

  const toggleCertificate = (index: number) => {
    setVisibleCerts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div>
      <main className="flex items-center justify-center mt-16 py-16 pt-12">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              <span>My </span><span className="text-red-600">Skills</span>
            </h1>
            <div className="text-sm font-normal text-gray-500 lg:text-sm dark:text-gray-400 space-y-4">
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

              <div>
                <h2 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-gray-100">
                  Languages
                </h2>
                <ul className="space-y-1">
                  <li>❖ English</li>
                  <li>❖ Arabic</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-2 text-xl font-extrabold text-gray-900 dark:text-gray-100">
                  Certifications
                </h2>
                <ul className="mt-2 space-y-2"> 
                  <li className="flex items-center">
                    <p>❖ CompTIA Network+ (In-Progress)</p>
                  </li>
                  {certificates.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <p>❖ {cert.name}</p>
                      <button
                        onClick={() => toggleCertificate(index)}
                        className="ml-2 border border-black text-black px-2 py-0.5 text-xs font-semibold rounded flex items-center hover:bg-gray-100 transition-all"
                      >
                        {visibleCerts[index] ? "Hide Credential" : "Show Credential"}
                        {visibleCerts[index] ? (
                          <ChevronUp size={14} className="ml-1" />
                        ) : (
                          <ChevronDown size={14} className="ml-1" />
                        )}
                      </button>
                    </li>
                  ))}
                  {certificates.map((cert, index) =>
                    visibleCerts[index] ? (
                      <div key={index} className="mt-2">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          width={600}
                          height={400}
                          className="rounded-lg border border-gray-300 shadow-md"
                        />
                      </div>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-8">
            <Image
              src="/images/MarkDuraid.png"
              alt="Mark Duraid Logo"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
