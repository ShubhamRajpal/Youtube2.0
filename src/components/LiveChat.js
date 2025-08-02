import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      dispatch(
        addMessage({
          name: generateRandomNames(),
          text: generateRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="flex flex-col items-center mb-2">
      <div className="p-2 mx-2 w-full h-[460px] border border-gray-200 overflow-y-scroll flex flex-col-reverse">
        {message.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} text={msg.text} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shubham",
              text: liveMessage,
            })
          );

          setLiveMessage("");
        }}>
        <input
          type="text"
          className="border border-gray-400 w-[310px] p-1 rounded-sm"
          placeholder="Enter Message"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="m-1 bg-green-300 px-5 py-1 font-bold rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
