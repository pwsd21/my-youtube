import React from "react";
import Button from "./Button";
import { list } from "../utils/constants";

const ButtonsList = () => {
  return (
    <div className="flex">
      {list?.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonsList;
