import "./sidebar.css";
import {
  RssFeed,
  Chat,
  Group,
  Bookmark,
  Event,
  MarkunreadMailboxRounded,
  AccountCircleRounded,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to="/">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Posts</span>
          </li>
            </Link>
            <Link to={`/profile/${user.username}`}>
          <li className="sidebarListItem">
            <AccountCircleRounded className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
          </Link>
          <li className="sidebarListItem no">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem no">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem no">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Saved</span>
          </li>
          <li className="sidebarListItem no">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Calendar</span>
          </li>
        </ul>
        <button className="sidebarButton no">Show More</button>
        <h4 className="rightbarTitle">Recent</h4>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
