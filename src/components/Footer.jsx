import gh from "/src/assets/ghw.png";
import linked from "/src/assets/linked.png";
import resume from "/src/assets/resume.pdf";
import resumePic from "/src/assets/resume4.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl"></a>
        </a>
        <nav className="lg;m-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a
            href="www.linkedin.com/in/ranjit-saini-20141911"
            className="mr-5 hover:text-white"
            target="_blank"
          >
            LinkedIn
            <img
              src={linked}
              alt="LinkedIn logo"
              className="w-6 h-6 mx-auto mt-1"
            />
          </a>

          <a
            href="https://github.com/rjsaini88"
            target="_blank"
            className="mr-5 hover:text-white "
          >
            GitHub
            <img
              src={gh}
              alt="GitHub logo"
              className="w-6 h-6 mx-auto mt-1"
            />
          </a>
          <a
            href={resume}
            target="_blank"
            alt="Opens up my current Resume in a new tab"
            className="mr-5 hover:text-white"
          >
            Resume
            <img
              src={resumePic}
              alt="GitHub logo"
              className="w-6 h-6 mx-auto mt-1 mr-5 hover:text-black hover:bg-white"
            />
          </a>

          <a
            href="mailto:rsaini88@gmail.com"
            alt="my personal email address"
            className="mr-5 hover:text-white "
          >
            {/* {" "} */}
            Email
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mx-auto mt-1"
            >
              <path
                strokeLinecap="round"
                d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
              />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
