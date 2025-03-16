import Image from "next/legacy/image";
import MarkDuraidpic from '../../public/images/MD13bgRemoved.png';

export default function Home() { 
  return (
    <div className="bg-custom min-h-screen w-full">
      

      <main className="flex items-center justify-center py-16 pt-8">  
        <div className="text-left max-w-screen-xl px-8 sm:px-12 md:px-16 flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 md:pr-8">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              Contact <span className="text-yellow-500">Me</span>
            </h1>
            
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdox06f0kpFqg9vrMU3-K2vg03rFQDRel0Ev3bZ8JamRxa5QQ/viewform?embedded=true"
              width="100%"  
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              style={{ minHeight: '500px', backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px' }} 
            >
              Loading…
            </iframe>
          </div>

          <div className="md:w-1/2 md:pl-8 flex justify-center">
            <Image
              src={MarkDuraidpic}
              alt="Mark Duraid Logo"
              className="rounded-lg shadow-lg"
              layout="intrinsic"
            />
          </div>

        </div>
      </main>
    </div>
  );
}
