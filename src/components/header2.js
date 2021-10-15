import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header2 = () => {
  return (
    <header className="shadow-lg  py-4">
      <div className="max-w-6xl  mx-auto flex align-middle justify-between px-4 xl:px-0">
        <Link to="/" className="">
          <StaticImage src="../images/logo.png" alt="vector" />
        </Link>
        <nav className="hidden lg:flex align-middle">
          <Link
            to="/headers"
            className=" my-auto ml-8  text-black font-semibold group relative"
          >
            <div className="flex items-center justify-items-end">
              About
              <svg
                width="8"
                height="10"
                viewBox="0 0 6 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transform group-hover:-rotate-180 mx-1"
              >
                <path
                  d="M3.00007 5L0.401993 0.5L5.59814 0.5L3.00007 5Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="  hidden group-hover:block absolute -ml-4 bg-white px-4 shadow-md">
              <ul className="p-2">
                <Link to="/">headers</Link>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </Link>

          <Link to="/" className="my-auto ml-8  text-black font-semibold ">
            Example
          </Link>
          <Link to="/" className="my-auto ml-8  text-black font-semibold ">
            Example
          </Link>
          <Link to="/" className="my-auto ml-8  text-black font-semibold ">
            Example
          </Link>
        </nav>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-black border border-white rounded hover:text-red hover:border-white">
            <svg
              className="w-8 h-8 fill-red-800"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header2
