import React from "react";

export default function NavTabs() {
  return (
    <header className="flex flex-wrap flex-row justify-between items-center bg-red-800 h-12 md:sticky">
      <h1 className="bg-black">Ranjit Saini</h1>
      <div className="title-font font-medium text-white mb-4 md:mb-0">
        {/* <a href="#about" className>About Me</a> */}
        <nav className="md;mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 felx flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Previous work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>

          <a href="#contact" className="mr-5 hover:text-white">
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
}
