import Link from 'next/link'
import AstronautIcon from '../../images/AstronautIcon';
import BurgerLinesIcon from '../../images/BurgerLinesIcon';
import HomeIcon from '../../images/HomeIcon';
import LightIcon from '../../images/LightIcon';

export default function Navbar() {
    return (
        <div
        className="
        xl:hidden 
        fixed 
        z-50 
        top-auto 
        bottom-0 
        w-full 
        md:w-2/3 
        md:left-1/2 
        p-4 
        transition-all 
        duration-500 
        transform 
        md:-translate-x-1/2">
        <nav
          className="
          flex 
          justify-evenly 
          py-3 
          bg-secondary 
          rounded-lg 
          overflow-hidden"
          aria-label="quick access"
        >
            <Link href="/">
          <a
            className="
            relative 
            text-inverted 
            text-center"
            title="Home"
            >
                <HomeIcon/>
              <span className="text-xs">Home</span></a
          ></Link>
          <Link href="/about">
            <a
            className="
            relative 
            text-inverted 
            text-center"
            title="About"
            >
                <AstronautIcon/>
                <span className="text-xs">About</span></a
          ></Link>
          <Link href="/">
          <a
            className="relative text-inverted text-center"
            title="Projects"
            >
                <LightIcon />
                <span className="text-xs">Projects</span></a>
            </Link>
            
            
            <button className="
            text-inverted 
            text-center" 
            id="navbar-button-menu">
            <BurgerLinesIcon/>
            <span className="text-xs">Menu</span>
          </button>
        </nav>
      </div>
    );
};