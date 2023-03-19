
import { projects } from "./DataInfo";

export default function Projects() {
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
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                  target="_blank"
                  alt="Project Image"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-pink mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-emerald-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* <div className="w-screen h-screen flex items-center justify-center">
      <span>Hello World</span>
    </div> */}
    </section>
  );
}
