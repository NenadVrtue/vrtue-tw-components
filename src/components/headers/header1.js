import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Header1 = () => {
  return (
    <header className="shadow-lg  py-4">
      <div className="max-w-6xl  mx-auto flex align-middle justify-between px-4 xl:px-0">
        <Link to="/" className="">
          <StaticImage src="../images/trnsp-Logo-1.png" alt="vector" />
        </Link>
        <nav className="hidden lg:flex align-middle">
          <Link
            to="/"
            className="my-auto ml-4 text-2xl text-black font-semibold hover:text-red-700"
          >
            kuca
          </Link>
          <Link to="/" className=" my-auto ml-4">
            Home
          </Link>
          <Link to="/" className="my-auto ml-4">
            Home
          </Link>
          <Link to="/" className="my-auto ml-4">
            Home
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

export default Header1
