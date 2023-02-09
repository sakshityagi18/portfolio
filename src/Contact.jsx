import React from "react";

function Contact(){
  return (
    <div className="h-screen w-full lg:px-8 lg:py-4 p-2 flex flex-col justify-center items-center bg20">
        <div className="flex lg:space-x-2 items-center justify-center flex-col lg:flex-row w-full h-full px-4 py-8">
          <div className="flex items-center px-5 flex-col lg:py-12 space-y-2 lg:space-y-4 lg:h-4/5 lg:w-2/5 w-full h-1/2">
            <h1 className="lg:text-5xl text-3xl font-semibold text-center text-gray-400 font-mono uppercase">Contact</h1>
            <div className="wrapper flex space-x-6">
              <i class="fa fa-3x fa-facebook-square"></i>
              <i class="fa fa-3x fa-twitter-square"></i>
              <i class="fa fa-3x fa-github-square"></i>
              <i class="fa fa-3x fa-snapchat-square"></i>
            </div>
            <h1 className="text-gray-400 text-center font-mono">You can contact me anytime between 9am to 10am...</h1>
            <h2 className="font-mono text-center text-gray-400">Call me at <span className="text-blue-400 cursor-pointer font-mono">+91 483****32</span></h2>
            <h2 className="font-mono text-gray-400 text-center">You can move to<span className="text-blue-400 cursor-pointer"> FAQs</span> or <span className="text-blue-400 cursor-pointer">Support</span> page to get more information about our site.</h2>
          </div>
          <div className="lg:h-4/5 flex flex-col justify-center items-center lg:w-2/5 w-full px-6 lg:py-4 h-3/5">
            <h2 className="text-gray-400 font-mono lg:text-lg uppercase">Get in touch</h2>
            <h1 className="lg:text-3xl font-mono text-gray-400">Send me a message</h1>
            <div className="space-y-4 w-full">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-gray-400 cursor-pointer">Name*</label>
                <input id="name" placeholder="Your name*" className="caret-lime-400 text-gray-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-gray-400 cursor-pointer">Email*</label>
                <input id="email" placeholder="Your email*" className="caret-lime-400 text-gray-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="text-gray-400 cursor-pointer">Message*</label>
                <textarea id="message" placeholder="Message*" className="caret-lime-400 text-gray-400 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/10" />
              </div>
              <div className="flex space-x-2">
                <button className="custom-btn btn-13">Submit</button>
                <button className="custom-btn btn-13">Reset</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );

}
export default Contact;