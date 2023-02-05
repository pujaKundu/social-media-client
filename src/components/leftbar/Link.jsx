import React from "react";

const Link = ({ src, text }) => {
  return (
    <>
      <ul className="flex my-2 hover:bg-gray-300 p-3 mr-4 rounded-lg">
        <span>
          <img className="w-5 mr-2" src={src} alt="text" />
        </span>
        <span className="font-semibold text-slate-800">{text}</span>
      </ul>
    </>
  );
};

export default Link;
