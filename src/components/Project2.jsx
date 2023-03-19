import portfolioPic from "/src/assets/firstPortfolio.png";

// import { projects } from "./DataInfo";

export default function Project2() {
  return (
    <section id="projects" className="text-emerald-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1>App I've Built</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are some of the app I've built during my course at Bootcamp.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <a
            href="https://rjsaini88.github.io/hw2-2022/"
            target="_blank"
            key={portfolioPic}
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={portfolioPic}
                // target="_blank"
                alt="Project Image"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-pink mb-3">
                My Very first Portfolio
                </h1>
                <h2 className="tracking-widest text-sm title-font font-medium text-emerald-400 mb-1">
                HTML and CSS
                </h2>
                <p className="leading-relaxed">      My very first portfolio I created the seccond week of class. I feel this is something special as it shows where I started from and how much I have grown. It a great benchmark to guage my progress as a developer.

                </p>
              </div>
            </div>
          </a>
   
        </div>
      </div>
    </section>
  );
}
