import React from "react";
import Image from "next/legacy/image";
import MarkDuraidpic from "../../public/images/niwcpactp.png";
import GoldCircuit from "../../public/images/goldcircuit.png";
import Chatbot from '../components/Chatbot'; 

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/images/6191107.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex-grow flex items-center justify-center py-16 pb-16">
        <div className="text-left max-w-screen-xl px-8 sm:px-12 md:px-16 flex flex-col md:flex-row items-center w-full">
          <div className="md:w-1/2 md:pr-8 max-w-3xl mx-auto">
            <h1 className="mt-24 mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              My <span className="text-yellow-500">Experience</span>
            </h1>
            {renderExperience(
              "Naval Information Warfare Center Pacific",
              "Computer Scientist | July 2024 - Present",
              ""
            )}
            {renderExperience(
              "Naval Information Warfare Center Pacific",
              "Security Automation Engineer Intern | January 2024 - March 2024",
              "Utilized GO to categorize and implement various Security Technical Implementation Guide (STIG) benchmarks, enhancing the overall security posture of target systems. Enhanced CyberKnight software by incorporating the Cybersecurity Vulnerability Analysis (CVA) process. Developed a custom application taking in STIG objects, facilitating the comparison of vulnerability statuses. Automated routine tasks within the CyberKnight project, optimizing processes for increased efficiency. Coordinated bi-weekly meetings with the project manager, security team, and developers to ensure alignment with security objectives."
            )}
            {renderExperience(
              "Naval Information Warfare Center Pacific",
              "Machine Learning Engineer NREIP Intern | October 2023 - December 2023",
              "Developed a multi-tiered NLP (Natural Language Processing) application using HTML, JavaScript, and Python with Node.js, leveraging trunk-based development methodologies. Implemented an information extraction system utilizing Python for data scraping from diverse file formats (PDF, DOCX, XLSX), demonstrating expertise in data parsing and automation. Conducted bi-weekly meetings to provide project updates and align with team objectives."
            )}
            {renderExperience(
              "Naval Information Warfare Center Pacific",
              "Security Software Engineer Intern | June 2023 — August 2023",
              "Developed a specialized tool using RMF (Risk Management Framework) for the Navy, streamlining cybersecurity risk assessments. Applied Agile Development methodologies and Trunk-Based Development for efficient code integration. Led daily standups, facilitated user interviews, and created wireframes to ensure a user-friendly application experience."
            )}
          </div>

          <div className="md:w-1/2 md:pl-8 flex flex-col items-center">
            <div className="mb-20">
              <Image
                src={MarkDuraidpic}
                alt="Mark Duraid"
                className="rounded-lg shadow-lg"
                layout="intrinsic"
                width={300}
                height={300}
              />
            </div>
            <div className="mb-24">
              <Image
                src={GoldCircuit}
                alt="Gold Circuit Design"
                className="rounded-lg shadow-lg"
                layout="intrinsic"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Add the Chatbot component here */}
      <Chatbot />  {/* This will render the chatbot at the bottom of the page */}
    </div>
  );
}

function renderExperience(title: string, role: string, description: string) {
  return (
    <div className="mb-6">
      <div className="flex items-center">
        <h2
          className="text-md font-bold text-white lg:text-md no-underline"
          style={{ lineHeight: "1.5" }}
        >
          {title}
        </h2>
      </div>
      <p
        className="mb-2 text-sm italic text-yellow-500"
        style={{ lineHeight: "1.8" }}
      >
        {role}
      </p>
      {description && (
        <p className="mb-2 text-sm text-white" style={{ lineHeight: "1.8" }}>
          {description}
        </p>
      )}
    </div>
  );
}
