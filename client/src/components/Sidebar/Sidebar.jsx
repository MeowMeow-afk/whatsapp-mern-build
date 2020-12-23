import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "../SidebarChat/SidebarChat";
import image from "./myimage.jpeg";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* header */}

      <div className="sidebar__header">
        <div className="header__left">
          <Avatar src={image} />
        </div>
        <div className="header__right">
          <IconButton>
            <DonutLargeIcon className="header__btn" />
          </IconButton>
          <IconButton>
            <ChatIcon className="header__btn" />
          </IconButton>
          <IconButton>
            <MoreVertIcon className="header__btn" />
          </IconButton>
        </div>
      </div>

      {/* searchbar */}

      <div className="sidebar__search">
        <div className="sidebar__searchElements">
          <SearchIcon className="search__btn" />
          <input placeholder="search or start new chat" type="text" />
        </div>
      </div>

      {/* sidebar chat */}
      <div className="sidebar__chat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
