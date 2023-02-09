import React from "react";
import Card2 from "./Card2";

function Project() {
  return (
    <div className="h-screen w-full lg:px-8 lg:py-4 p-2 flex flex-col justify-center items-center bg20">
      <h1 className="text-gray-200 font-semibold text-center lg:mt-0 lg:text-xl mt-4">Projects i am proud of...</h1>
        <div className="flex glass h-full w-full flex-wrap px-4 gap-4 justify-evenly pt-4 lg:overflow-y-hidden overflow-y-scroll lg:pt-12 py-6">
          <div className="rounded-lg h-1/2 shadow-lg lg:grayscale hover:grayscale-0 hover:outline hover:outline-offset-2 hover:outline-1 outline-orange-600 w-full lg:w-1/4 border-2 flex flex-col items-end transition duration-900 delay-200 ease-in-out justify-end bgc"><Card2 title="E-commerce" p="Buit in ReactJS" /></div>
           <div className="rounded-lg h-1/2 shadow-lg lg:grayscale hover:grayscale-0 hover:outline hover:outline-offset-2 hover:outline-1 outline-orange-600 w-full lg:w-1/4 border-2 flex flex-col items-end transition duration-900 delay-200 ease-in-out justify-end bgc2"><Card2 title="Todo App" p="Buit in ReactJS" /></div>
           <div className="rounded-lg h-1/2 shadow-lg lg:grayscale hover:grayscale-0 hover:outline hover:outline-offset-2 hover:outline-1 outline-orange-600 w-full lg:w-1/4 border-2 flex flex-col items-end transition duration-900 delay-200 ease-in-out justify-end bgc3"><Card2 title="Todo in TS" p="Buit in ReactTS" /></div>
          <div className="rounded-lg h-1/2 shadow-lg lg:grayscale hover:grayscale-0 hover:outline hover:outline-offset-2 hover:outline-1 outline-orange-600 w-full lg:w-1/4 border-2 flex flex-col items-end transition duration-900 delay-200 ease-in-out justify-end bgc5"> <Card2 title="Calculator" p="Buit in ReactJS" /></div>
           <div className="rounded-lg h-1/2 shadow-lg lg:grayscale hover:grayscale-0 hover:outline hover:outline-offset-2 hover:outline-1 outline-orange-600 w-full lg:w-1/4 border-2 flex flex-col items-end transition duration-900 delay-200 ease-in-out justify-end bgc4"><Card2 title="Tables" p="Buit in ReactJS" /></div>
           <div className="rounded-lg h-1/2 shadow-lg lg:grayscale hover:grayscale-0 hover:outline hover:outline-offset-2 hover:outline-1 outline-orange-600 w-full lg:w-1/4 border-2 flex flex-col items-end transition duration-900 delay-200 ease-in-out justify-end bgc7"><Card2 title="Tic tac toe" p="Buit in ReactJS" /></div>
        </div>
    </div>
  );

}
export default Project