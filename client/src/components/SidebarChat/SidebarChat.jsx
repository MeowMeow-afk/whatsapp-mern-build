import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";
function SidebarChat() {
  return (
    <div className="sidebarChat">
      <div className="sidebarChat__chaticon">
        <Avatar />
      </div>
      <div className="sidebarChat__info">
        <h2>Dance Room</h2>
        <p>This is a testing message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
