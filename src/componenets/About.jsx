export default function AboutMe() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
          md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          {/* may need a wrapper  */}

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, my name is Ranjit (Rj)
            <br className="hidden lg:inline-block" /> I am a Full Stack Web
            Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I enjoy working with my hands. I am a Sr. GM at a ReadySpaces where
            I overlook improvement projects. I am a self-taught developer who is
            passionate about making open-source more accessible, creating
            technology to elevate people, and building community. I am a Full
            Stack Web Developer with React.js, Express.js, Node.js, and MongoDb
            as my tech stack. I enjoy solving problems, and take pride in my
            ability.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 
            focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Let's Chat
            </a>

            <a
              className="ml-4 inline-flex text-gray-400 bg-gray-400 border-0 py-2 px-6
            focus:outline-none hover:bg-green-600 rounded text-lg"
              href="#projects"
            >
              See my work!!!{" "}
            </a>
            {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            src="../assets/profilepic.jpeg"
            alt="My profile picture"
          />
        </div>
        {/* <div
          id="contact"
          className="w-screen h-screen flex items-center justify-center"
        ></div> */}
      </div>
    </section>
  );
}
