import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { randomNameGenerator, randomTextGenerator } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling - while using API just fetch it here and convert it to json
      console.log("API POLLING");

      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomTextGenerator(25),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <h1 className="font-bold px-2">Live Chat</h1>
      <div className=" flex flex-col-reverse p-2 mx-2 border border-gray-100 h-[500px] w-full bg-gray-100 rounded-lg overflow-y-scroll">
        {chatMessages?.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Pawan Sachdeva",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-80 border border-black m-2 px-2 bg-gray-50"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-4 bg-green-50 rounded-lg">Send Message</button>
      </form>
    </>
  );
};

export default LiveChat;
