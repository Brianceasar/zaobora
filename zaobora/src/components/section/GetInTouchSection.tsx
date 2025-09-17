import { FaArrowRight } from 'react-icons/fa6';

const GetInTouchSection = () => (
  <section id="getintouch" className="py-16">
    <div className="container mx-auto px-4">
      <div className="relative bg-green-700 rounded-lg p-8 md:p-12 text-white">
        <div className="row flex flex-wrap -mx-4 justify-between items-center">
          <div className="w-full lg:w-6/12 px-4 mb-8 lg:mb-0">
            <div className="subs-contentv2">
              <h5 className="text-xl font-bold mb-2">Get In Touch</h5>
              <h2 className="text-3xl md:text-4xl font-bold">
                Have a Question? Send Us a <span className="text-yellow-400">Message</span>
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <form 
              id="contactForm" 
              action="https://formspree.io/f/mdkoebpr" 
              method="POST" 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="col-span-1">
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  placeholder="Name" 
                  className="w-full p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400" 
                />
              </div>
              <div className="col-span-1">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="E-mail" 
                  required 
                  className="w-full p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400" 
                />
              </div>
              <div className="col-span-2">
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400" 
                />
              </div>
              <div className="col-span-2">
                <textarea 
                  name="message" 
                  id="message" 
                  placeholder="Message" 
                  required 
                  className="w-full p-3 rounded-md bg-white text-gray-800 placeholder-gray-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 h-32"
                ></textarea>
              </div>
              <div className="col-span-2">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-white text-green-700 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GetInTouchSection;