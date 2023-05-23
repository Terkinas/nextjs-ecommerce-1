import { Github, Instagram, Menu, Search, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Poppins } from 'next/font/google'
import HeaderLine from "./ui/HeaderLine";
import MobileSidebar from "./ui/MobileSidebar";
import { AnimatePresence } from 'framer-motion';


const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'],
 })

type Props = {
  transparent?: boolean;
}

export default function Navbar(props: Props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <HeaderLine />
      <nav
        className={"top-0 relative bg-white w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 lg:py-6 " + poppins.className}
      >
        
        <div className="container max-w-6xl px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between items-center lg:w-auto lg:static lg:flex lg:justify-start">
            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm lg:text-base leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
              }
              href="/"
            >
              terkinas
            </Link>
            
            

          </div>
          <div
            className={
              "flex justify-center items-center lg:bg-transparent rounded"
            }
            id="example-navbar-warning"
          >

            
            

            <ul className={`flex flex-row items-center 
            lg:items-center list-none  lg:ml-auto
            `}>

            <div className="hidden relative lg:flex items-center w-full rounded mr-4 bg-red-100">
              <input className="p-1 h-10 text-base w-64 border px-4 py-1 border-gray-400 border-r-0 rounded-l outline-none" placeholder="Įrašykite, ko ieškote" type="text" />
              <span className="bg-emerald-500 relative text-white w-10 h-10 rounded flex items-center justify-center
              rounded-l-none border-emerald-500 cursor-pointer
              hover:bg-emerald-400">
                <Search size={18} />

              </span>
            </div>  
            
            <li className=" items-center hidden lg:flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center "
                  }
                  href="#pablo"
                >
                  
                  <span className="hidden lg:inline-block">Parduotuvė</span>
                </a>
              </li>

         

            <li className="items-center hidden lg:flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center "
                  }
                  href="#pablo"
                >
                  
                  <span className="hidden lg:inline-block">Naujienos</span>
                </a>
              </li>

            <li className="items-center hidden lg:flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center "
                  }
                  href="#pablo"
                >
                  
                  <span className="hidden lg:inline-block">Kontaktai</span>
                </a>
              </li>

              <li className="hidden lg:flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center "
                  }
                  href="#pablo"
                >
                  <Instagram
                    size={20}
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500 hover:text-gray-400") +
                      " "
                    }
                  />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 pl-0 py-4 lg:py-2 flex items-center "
                  }
                  href="#pablo"
                >
                  <ShoppingCart
                    size={20}
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500 hover:text-gray-400") +
                      " "
                    }
                  />
                </a>
              </li>

              <li className="flex items-center">
                <Link href="/prisijungimas"
                  className={"bg-gray-800 text-xs lg:text-base text-white active:bg-gray-900 hover:bg-gray-900 flex items-center  px-4  py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3"}
                  style={{ transition: "all .15s ease" }}
                >
                    Prisijungti
                </Link>
              </li>

              <li className="flex items-center">
                <button className=" py-2 pl-3" onClick={() => setNavbarOpen(!navbarOpen)}>
                  <Menu size={20} className="block lg:hidden cursor-pointer" />
                </button>
              </li>
            </ul>

          </div>
        </div>
        <AnimatePresence
    initial={false} mode="wait" >


        {navbarOpen && <MobileSidebar setNavbarOpen={setNavbarOpen} />}
    </AnimatePresence>
      </nav>
    </>
  );
}