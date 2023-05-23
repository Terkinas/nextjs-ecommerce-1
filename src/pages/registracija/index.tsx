import React from "react";

import NavbarSmall from "@/components/NavbarSmall";
import FooterSmall from "@/components/FooterSmall";
import { Github } from "lucide-react";
import GoogleSVG from "@/assets/img/google.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Register() {
  return (
    <>
      <NavbarSmall />
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full"
            style={{
              
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-0 rounded-lg border-0">
                  <div className="rounded-t mb-0 px-6 lg:px-6 py-6">
                    <div className="text-left mb-6">
                      <h5 className="text-gray-600 text-xl font-bold">
                        Create account
                      </h5>
                      <h6 className="text-gray-500 text-xs">
                        Start your 30 day free trial. Cancel anytime
                      </h6>
                    </div>
                    <div className="btn-wrapper text-left flex flex-col gap-2">
                      <button
                        onClick={() => signIn('github')}
                        className="bg-white w-full active:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg outline-none focus:outline-none mr-2 mb-1 shadow 
                        hover:shadow-md inline-flex items-center justify-center font-bold text-xs border border-1 border-gray-100"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <Github className="mr-1" size={20} />
                        Sign Up with Github
                      </button>
                      <button
                        onClick={() => signIn('google')}
                        className="bg-white w-full active:bg-gray-100 text-gray-800 px-4 py-2 rounded-lg outline-none focus:outline-none mr-1 mb-1 
                        shadow hover:shadow-md inline-flex items-center justify-center font-bold text-xs border border-1 border-gray-100"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <Image
                          alt="G"
                          className="w-5 mr-1"
                          src={GoogleSVG}
                        />
                        Sign Up with Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-6 lg:px-6 py-3 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email*
                        </label>
                        <input
                          type="email"
                          className=" px-4 py-2 border border-1 border-gray-100 placeholder-gray-400 text-gray-700 bg-white rounded-lg text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Enter your email"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-1">
                        <label
                          className="block text-gray-900 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password*
                        </label>
                        <input
                          type="password"
                          className="border border-1 border-gray-100 px-4 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-lg text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Create a password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          {/* <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          /> */}
                          <span className=" text-xs font-semibold text-gray-700">
                            Must be atleast 8 characters.
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold px-4 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Create account
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center px-6 text-xs font-semibold">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-blue-400"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-400"
                    >
                      <small>Already have an account?</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}