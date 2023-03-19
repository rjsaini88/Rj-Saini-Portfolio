import { skills } from "./DataInfo";

export default function Skills() {
  return (

    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className>Skills and Technoogies</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have experience with a range of technologies and languages. I am a
            self-taught developer who is passionate about making open-source
            more accessible, creating technology to elevate people, and building
            community. I am a Full Stack Web Developer with React.js,
            Express.js, Node.js, and MongoDb as my tech stack.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 round flex p-4 h-full items-center">
                <span className="title-font font-medium text-green">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
