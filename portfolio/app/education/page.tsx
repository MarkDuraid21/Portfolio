import Image from "next/image";
import MarkDuraidpic from "../../public/images/sdsuemblembg.png";
import SDSUImage from "../../public/images/SDSULogo.png";
import GrossmontImage from "../../public/images/GrossmontL.png";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "url('/images/6191107.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="flex items-center justify-center min-h-screen pb-20 sm:pb-16 md:pb-0">
        <div className="text-left max-w-screen-xl px-4 sm:px-8 flex flex-col md:flex-row items-center">
          {/* Left Section - Education Details */}
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl pt-20 sm:pt-16 md:pt-0">
              My <span className="text-yellow-500">Education</span>
            </h1>
            {renderEducation(
              "San Diego State University",
              "Bachelor of Science in Computer Science, 3.6 GPA | Graduated: May 2024"
            )}
            {renderEducation(
              "Grossmont College",
              "Associate of Science in Computer Science, 3.8 GPA | Graduated: June 2022"
            )}
            <div className="mb-2 text-sm font-normal text-white lg:text-sm dark:text-gray-400">
              <span className="font-bold">Relevant coursework:</span><br />
              <span className="text-white">
                Computer Security, Computer Programming I & II, Networking I & II, 
                Intro to Information Security, Website Development and Organization, 
                Introduction to UNIX/Linux, Introduction to Databases, 
                Introduction to Software Systems.
              </span>
            </div>
            <div className="flex items-center">
              <div style={{ display: "flex" }}>
                <Image
                  src={SDSUImage}
                  alt="SDSU Logo"
                  className="h-8 mr-3"
                  layout="fixed"
                  width={150}
                  height={150}
                />
                <Image
                  src={GrossmontImage}
                  alt="Grossmont College Logo"
                  className="h-8 mr-3"
                  layout="fixed"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
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
  );
}

function renderEducation(school: string, details: string) {
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-md font-bold text-white lg:text-md" style={{ lineHeight: "1.5" }}>
          {school}
        </h2>
      </div>
      <p className="mb-2 text-sm font-italic text-yellow-500" style={{ lineHeight: "2", marginTop: "-0.25rem" }}>
        {details}
      </p>
    </>
  );
}
