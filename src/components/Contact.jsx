export default function Contact() {
  return (
    <section id="contact" className="relative">
  
      <form
        name="contact"
        className="lg;w-1/3 md:w1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
      >
        <h2 className="mx-auto">Let's Chat</h2>
        <br />
        {/* <p className="leading-relaxed mb-5"></p> */}
        <div className="relative px-4 mb-4">
          <label htmlFor="name" className="leading-7 pl-2 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            label="Name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-color duration-200 ease-in-out"
          />
        </div>
        <div className="relative px-4 mb-4">
          <label htmlFor="email" className="leading-7 text-sm pl-2 text gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-color duration-200 ease-in-out"
          />
        </div>
        <div className="relative px-4 mb-4">
          <label htmlFor="message" className="leading-7 pl-2 text-sm text-gray-400">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900
h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-color duration-200 ease-in-out
"
          />
        

        </div>
        <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow 
            hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute bottom-0 right-0 mr-4"
            type="submit"
            >Submit</button>
      </form>

    </section>


  );
}
