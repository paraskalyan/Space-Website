import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfinity } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="h-[10vh] bg-transparent">
      <nav className="flex justify-between px-10 items-center h-full">
        <div>
          <Link href="/" className='text-white max-sm:font-bold'>HOME</Link>
        </div>
        <div className="flex gap-7 text-white max-sm:gap-3">
          <Link className="nav-hover" href="/earth">EARTH</Link>
          <Link className="nav-hover" href="/mars">MARS</Link>
          <Link className="nav-hover" href="/venus">VENUS</Link>
          <Link className="nav-hover" href="/jupiter">JUPITER</Link>
        </div>
      </nav>
    </div>                                                                                                                    
  );
};

export default Navbar;
