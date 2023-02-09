import React from "react";

function About() {
  return (
    <>
      <div className="h-screen pt-2 bg20 flex justify-center w-full items-center bg-fixed">
        <div className="pt-4 lg:pt-1 flex lg:flex-row flex-col space-y-2 justify-center items-center w-full h-full">
          <div className="w-full glass lg:w-1/3 p-1 flex items-center justify-center h-1/3 lg:h-full">
            <div className="w-4/5 overflow-hidden h-4/5 flex lg:mt-0 mt-4 items-center justify-center">
              <div className="w-4/5 dp rounded-lg lg:grayscale scale-125 hover:scale-100 hover:grayscale-0 transition ease-in-out h-4/5"></div>
              
            </div>
          </div>
          <div className="w-full lg:w-2/3 p-1 flex lg:items-center items-top justify-center h-2/3 lg:h-full">
          <div className="w-4/5 glass lg:space-y-4 space-y-2 p-4 lg:p-6 h-4/5 lg:overflow-hidden overflow-y-scroll">
          <h2 className="lg:text-2xl text-md text-emerald-600 font-bold">SAKSHI TYAGI</h2>
            <h1 className="lg:text-7xl text-2xl text-gray-300 font-thin tracking-wide">I'm a Web</h1>
            <h1 className="lg:text-7xl text-2xl text-emerald-600 tracking-wide font-thin">Developer</h1>
            <p className="text-gray-300 font-thin text-sm lg:text-lg">Hello... this is Sakshi graduated from Deoband college and intends to be part of the organization where i can develop my technical & management skills, knowledge and make the best use of them for the growth of organization.Download CV for more details.</p>
            <button className="p-2 px-8 rounded-sm border border-emerald-600 text-emerald-600 bg-transparent">Download CV</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;