import React from "react";

const Button = ({ name }) => {
  return (
    <div className="">
      <button className="px-3 py-2 bg-gray-100 rounded-lg hover:bg-black hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
