import React from "react";
import "./ChatHeader.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function ChatHeader() {
  return (
    <div className="chatheader">
      <Avatar />
      <div className="chatheader__middle">
        <h2>Room Name</h2>
        <p>Last Seen at ....</p>
      </div>
      <div className="chatheader__icons">
        <IconButton>
          <SearchIcon className="chatheader__btn" />
        </IconButton>
        <IconButton>
          <AttachFileIcon className="chatheader__btn" />
        </IconButton>
        <IconButton>
          <MoreVertIcon className="chatheader__btn" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
