import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4  py-2 m-4 bg-gray-200 rounded-xl">{name}</button>
    </div>
  );
};

export default Button;
