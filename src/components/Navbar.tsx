import { ArrowDown, ArrowRight, Facebook, File, Github, Instagram, Menu, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Poppins } from 'next/font/google'

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
      <nav
        className={"top-0 absolute bg-white w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 " + poppins.className}
      >
        <div className="container max-w-6xl px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
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
            
            <li className=" items-center hidden lg:flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-sm "
                  }
                  href="#pablo"
                >
                  
                  <span className="hidden lg:inline-block">Merch</span>
                </a>
              </li>

            <li className="items-center hidden lg:flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-sm "
                  }
                  href="#pablo"
                >
                  
                  <span className="hidden lg:inline-block">About</span>
                </a>
              </li>

            <li className="items-center hidden lg:flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-sm "
                  }
                  href="#pablo"
                >
                  
                  <span className="hidden lg:inline-block">Blog</span>
                </a>
              </li>

            <li className="items-center hidden lg:flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-sm "
                  }
                  href="#pablo"
                >
                  
                  <span className="hidden lg:inline-block">Contact</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-sm "
                  }
                  href="#pablo"
                >
                  <Github
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
                    " px-3 pl-0 py-4 lg:py-2 flex items-center text-sm "
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
                <Link href="/auth/login"
                  className={"bg-gray-800 text-xs text-white active:bg-gray-900 hover:bg-gray-900 flex items-center  px-4  py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3"}
                  style={{ transition: "all .15s ease" }}
                >
                    Sign Up
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
        <ul className={`${navbarOpen ? 'block' : 'hidden'}`}>
          <li>about</li>
          <li>about</li>
          <li>about</li>
        </ul>
      </nav>
    </>
  );
}