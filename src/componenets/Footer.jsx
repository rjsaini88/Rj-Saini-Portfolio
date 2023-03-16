export default function Footer() {
    return (
<footer id="contact"
className="bg-gray-800 md:sticky top-0 z-10">
 <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
      <a className="title-font font-medium text-white mb-4 md:mb-0">
        <a href="#about" className="ml-3 text-xl">
          Ranjit Saini
        </a>
      </a>
      <nav className="lg;m-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
        
      <a href="#about" className="mr-5 hover:text-white">
          About Me

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>


        </a>
        <a href="#projects" className="mr-5 hover:text-black hover:bg-white">
        
          <img src="../assets/linked.png" alt="LinkedIn logo" className="w-6 h-6" />

        </a>
        <a href="#skills" className="mr-5 hover:text-white">
          Skills

          <img src="../assets/25231.png" alt="GitHub logo" className="w-6 h-6" />
        </a>

        <a href="#contact" className="mr-5 hover:text-white">
          Contact Me
          <img src="../assets/linked.png" alt="LinkedIn logo" className="w-6 h-6" />
        </a>
      </nav>
    </div>




</footer>
    );
}