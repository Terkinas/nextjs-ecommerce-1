import React from "react";

type Props = {
  absolute?: boolean;
}

export default function FooterSmall(props: Props) {
  return (

      <footer
        className='relative w-full pb-4'
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-gray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full flex justify-center md:w-4/12 px-4">
              <div className="text-xs text-gray-700 py-1 mb-3">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com"
                  className="text-gray-700 hover:text-gray-400 text-xs py-1"
                >
                  Terkinas
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com"
                    className="text-gray-700 hover:text-gray-400 text-xs block py-1 px-3"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="text-gray-700 hover:text-gray-400 text-xs block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://blog.creative-tim.com"
                    className="text-gray-700 hover:text-gray-400 text-xs block py-1 px-3"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                    className="text-gray-700 hover:text-gray-400 text-xs block py-1 px-3"
                  >
                    Privacy Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  );
}