import React from "react";
import Bot from "./Bot";
import Human from "./Human";

const Chat = () => {
  return (
    <div>
      <div className="d-flex align-items-start m-2 mt-5">
        <Bot
          text="Hi Sam! I am your personal shopping assistant , how can I help you today ?"
          Time="4:45PM"
        />
      </div>

      <div className="d-flex  justify-content-end  m-2">
        <Human
          text="I am looking for a hand bag, with long strap ."
          Time="4:46PM"
        />
      </div>
    </div>
  );
};

export default Chat;
