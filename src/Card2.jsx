import React from "react";

function Card2(props) {
  return (
    <>
      <div className="p-1 space-y-2 glass rounded-lg w-2/3 hover:border border-zinc-300">
        <h5 className="text-gray-800 text-lg font-medium">{props.title}</h5>
        <p className="text-gray-900 text-base">
          {props.p}
        </p>
        <div className="flex items-center justify-center">
          <button type="button" className="custom-btn text-black btn-13">View</button></div>
      </div>
    </>
  )
}
export default Card2;