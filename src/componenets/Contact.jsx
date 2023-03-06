export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nonwrap flex wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-purple-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameborder={0}
            marginheight={0}
            marginwidth={0}
            style={{ filter: "opacity(.6)" }}
            src=""
          />
          <div className="bg-gray-900 relative flex flex wrap py-6 rounded shadow-md">
            <h2 className="title-font font-semibold text-wite tracking-widest text-xs">
              ADDRESS
            </h2>
            <p className="mt-1">
              12345 Kourtney Ct. <br /> Orlando, FL 32826
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed">
              rsaini88@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
              PHONE
            </h2>
            <p className="leading-relaxed"> 951-216-9165</p>
          </div>
        </div>
      </div>
      {/* create form in react */}
      <form action=""></form>
    </section>

    // <div className="w-screen h-screen flex items-center justify-center">
    //   <span>Hello World</span>
    // </div>
  );
}
