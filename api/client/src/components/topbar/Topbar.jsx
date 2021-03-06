import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { dispatch } = useContext(AuthContext);
  const handleClick2 = (e) => {
    e.preventDefault();
    loginCall(
      { email: null, password: null },
      dispatch
    );
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">basic.</span>
        </Link>
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="What are you looking for today?"
            className="searchInput"
          />
        </div>
        
      </div>
      <div className="topbarCenter">
      <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        
      </div>
      <div className="topbarRight">
        
        <div className="topbarProfile">
          
          <Link to={`/profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="topbarImg"
            />
        </Link>
        <Link to={`/profile/${user.username}`}>
          <p className="profileNameText">{user.username}</p>
          </Link>
        
        </div>

          <button className="logoutButton" onClick={handleClick2}>
            Sign Out
        </button>
      </div>
      
    </div>
  );
}
