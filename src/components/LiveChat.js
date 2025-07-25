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
    <div>
      <div className="p-2 my-4 w-[360px] h-[600px] border border-gray-200 overflow-y-scroll flex flex-col-reverse">
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
          className="border border-black w-[280px] p-1"
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
