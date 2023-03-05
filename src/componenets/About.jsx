export default function AboutMe() {
  return (
<section id="about">

{/* may need a wrapper  */}

<h1 className="title">Hello, my name is Ranjit (Rj) </h1>
<p>
    I enjoy working with my hands. I am a Sr. GM at a ReadySpaces where I overlook improvement projects. I am a self-taught developer who is passionate about making open-source more accessible, creating technology to elevate people, and building community. I am a Full Stack Web Developer with React.js, Express.js, Node.js, and MongoDb as my tech stack.
    I enjoy solving problems, and take pride in my ability. 
</p>
<div>

<a href="#contact">
    Work with me
</a>
<a href="#projects">Projects I've done, see my past work. </a>
    {/* <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"> */}
</div>
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
<img className="object-cover object-center rounded" src="" alt="My profile picture" />

</div>



</section>

    // <div className="w-screen h-screen flex items-center justify-center">
    //   <span>Hello World</span>
    // </div>
  )
}