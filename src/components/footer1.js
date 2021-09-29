import React from "react"

const Footer1 = () => {
  return (
    <footer className="p-8 justify-items-center bg-gray-900">
      <div className="max-w-6xl mx-auto text-white">
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://vrtuedigital.com/">Vrtue Digital</a>
      </div>
    </footer>
  )
}

export default Footer1
