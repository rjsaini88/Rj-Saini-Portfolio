// import React from "react";

export default function NavTabs() {
  return (
    // <header className="flex flex-wrap flex-row justify-between items-center bg-red-800 h-12 md:sticky">
    //   <h1 className="bg-black">Ranjit Saini</h1>
    //   <div className="title-font font-medium text-white mb-4 md:mb-0">
    //     {/* <a href="#about" className>About Me</a> */}
    //     <nav className="md;mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 felx flex-wrap items-center text-base justify-center">
    //       <a href="#projects" className="mr-5 hover:text-white">
    //         Previous work
    //       </a>
    //       <a href="#skills" className="mr-5 hover:text-white">
    //         Skills
    //       </a>

    //       <a href="#contact" className="mr-5 hover:text-white">
    //         Contact Me
    //       </a>
    //     </nav>
    //   </div>
    // </header>

    <header className="bg-gray-800 md:sticky top-0 z-10">
    <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
      <a className="title-font font-medium text-white mb-4 md:mb-0">
        <a href="#about" className="ml-3 text-xl">
          Ranjit Saini
        </a>
      </a>
      <nav className="lg;m-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 felx flex-wrap items-center text-base justify-center">
        
      <a href="#about" className="mr-5 hover:text-white">
          About Me
        </a>
        <a href="#projects" className="mr-5 hover:text-black hover:bg-white">
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
