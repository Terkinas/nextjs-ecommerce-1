import { ArrowDown, Facebook, File, Github, Menu, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  transparent?: boolean;
}

export default function NavbarSmall(props: Props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "top-0 absolute bg-white w-full z-50 ") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
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

            <ul className="flex flex-row items-end lg:items-center list-none lg:ml-auto">
              

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
                  }
                  href="#pablo"
                >
                  <Github
                    size={20}
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " "
                    }
                  />
                  <span className="hidden lg:inline-block ml-2">Github</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className={
                    (props.transparent
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-gray-800 text-white active:bg-gray-900") +
                    " flex items-center text-xs px-4 pl-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <ArrowDown className="mr-1" size={16} /> Download CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}