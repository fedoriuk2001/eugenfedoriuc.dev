// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import {useTheme} from "next-themes";
import Link from "next/link";
import Image from "next/image";

// ===============   React   ===============
import {useState, useEffect} from "react";

// ===============   Icons   ===============
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {SwitchBookIcon} from "../../images/SwitchBookIcon";
import SwatchBookIcon from "../../images/SwatchBookIcon";



// ! ###############   Code   ###############
const Header = () => {

  const {systemTheme , theme, setTheme} = useTheme ();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChanger= () => {
      if(!mounted) return null;

      const currentTheme = theme === "system" ? systemTheme : theme ;

      if(currentTheme ==="dark"){
        return (
          <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
        )
      }

      else {
        return (
          <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
        )
      }
   };



  return (
    <header>
        {renderThemeChanger()}
        
    </header>
  );
};

export default Header;