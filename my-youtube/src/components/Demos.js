import React, { useMemo, useState } from "react";
import { nthPrime } from "../utils/helper";

const Demos = () => {
  const [text, setText] = useState(null);
  const [isDark, setIsDark] = useState(false);

  //   const prime = nthPrime(text);  - comment below line and uncomment this to see advantage of useMemo() hook
  const prime = useMemo(() => nthPrime(text), [text]);
  return (
    <div
      className={
        isDark
          ? "bg-black w-96 h-96 m-auto p-4 border"
          : "m-auto p-4 w-96 h-96 border"
      }
    >
      <div>
        <button
          className="border border-black m-2 p-2"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle
        </button>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">{prime}</h1>
      </div>
    </div>
  );
};

export default Demos;
