import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-[90vh] max-sm:gap-6">
      <div className="absolute w-full h-full top-0 -z-10">
        <video autoPlay muted loop className="video">
          <source src="/universe.mp4" type="video/mp4"></source>
        </video>  
      </div>
      <div className="font-bold text-primary uppercase text-white max-sm:text-[3rem] max-sm:px-3">Let&apos;s sail the universe </div>
      <div>
        <button className="bg-white text-black text-[1.3rem] max-sm:text-[1rem] px-6 py-1 rounded-full uppercase hover:bg-black hover:text-white border border-white transition-all">Join the journey  </button>
      </div>
    </div>
  );
}

