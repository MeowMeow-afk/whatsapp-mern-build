import React, { useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader/ChatHeader";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { IconButton } from "@material-ui/core";
import axios from "axios";
function Chat({ messages }) {
  const [input, setInput] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:9000/messages/new", {
      message: input,
      name: "yoyo",
      received: true,
    });
    setInput("");
  };
  console.log(messages);
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__body">
        {messages?.map((message) => (
          <p className={message?.received ? "chat__recieve" : "chat__message"}>
            <span className="chat__name">{message?.name}</span>
            <p>{message?.message} </p>
            <span className="chat__timestamp">
              {` ${new Date("2020-01-14T17:43:37.000Z").toLocaleString(
                undefined,
                {
                  timeZone: "Asia/Kolkata",
                }
              )}`}
            </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon className="footer__btn" />
        </IconButton>
        <IconButton>
          <AttachFileIcon className="footer__btn" />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="send a message"
            type="text"
          />
          <button className="hide" type="submit" onClick={submit}>
            send the message
          </button>
        </form>
        <IconButton>
          <MicIcon className="footer__btn" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
