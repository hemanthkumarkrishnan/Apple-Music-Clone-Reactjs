import React from "react";
import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDataLayerValue } from "../DataLayer";
import { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [{ user, searchItems }, dispatch] = useDataLayerValue();
  const [changeValue, setChangeValue] = useState("");
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  const handleChange = () => {
    dispatch({
      type: "SET_SEARCH",
      search: changeValue,
    });
    // console.log(changeValue)
    setChangeValue("");
    navigate("/Home/searchit");
  };
  // console.log("search "+searchItems);

  function logout() {
    navigate("/", { replace: true });
  }
  return (
    <Container>
      <div className="sidebarOption">
        <div className="search">
          <input
            type="text"
            className="search_input"
            placeholder="Search Song..."
            value={changeValue}
            onChange={(e) => setChangeValue(e.target.value)}
          />

          <button className="search_button" onClick={handleChange}>
            🔎
          </button>
        </div>
        <div className="options">
          <HomeIcon className="sidebarOption__icon" />
          <Link className="link-style" to={"/Home"}>
            Home
          </Link>
        </div>
        <div className="options">
          <FavoriteIcon className="sidebarOption__icon" />
          <Link className="link-style" to={"/Home/Addfav"}>
            Fav
          </Link>
        </div>
        <div className="options">
          <LogoutIcon className="sidebarOption__icon" />
          <Link className="link-style" to={"/"}>
            Logout
          </Link>
        </div>
        <div className="options">
          <AddShoppingCartIcon className="sidebarOption__icon" />
          <Link className="link-style" to={"/Home/Subscription"}>
            plan
          </Link>
        </div>
      </div>

      <br />
      <strong className="sidebar__title  ">PLAYLISTS</strong>
      <hr />

      <div className="sidebarOption">
        <div className="options__playlist">
          <Link className="link_playlist" to={"playlist/romantic"}>
            Romantic
          </Link>
        </div>
        <div className="options__playlist">
          <Link className="link_playlist" to={"playlist/happy"}>
            Happy
          </Link>
        </div>
        <div className="options__playlist">
          <Link className="link_playlist" to={"playlist/excited"}>
            Excited
          </Link>
        </div>
        <div className="options__playlist">
          <Link className="link_playlist" to={"playlist/sad"}>
            Sad
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  overflow: visible;
  margin-left: 0;

  .sidebar__title {
    margin-left: 0px;
    padding: 0px;
    font-size: 12px;
  }

  hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
    margin-left: 0px;
  }
  .search {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 5px;
    overflow: visible;
    .search_input {
      border: 1px solid black;
      border-radius: 5px;
      width: 70%;
      margin-left: 0px;
    }
    .search_input:focus {
      border: 5px solid red;
    }
    .search_button {
      border: 0.5px solid black;
      margin-left: 5px;
      border-radius: 5px;
      background-color: #fff;
    }
  }
  .sidebarOption__icon {
    height: 20px;
    width: 20px;
    margin-left: 0px;
    padding-left: 0px;
  }
  .sidebarOption {
    display: flex;
    margin-left: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    height: 30vh;
    overflow: visible;

    :hover {
      color: rgba(0, 0, 0, 0.48);
    }

    .options {
      margin-left: 0px;
      display: flex;
      align-items: start;
      justify-content: start;
      overflow: visible;
    }
  }

  .options__playlist {
    margin-top: 10px;
    margin-left: 0px;
  }

  .link_playlist {
    margin-top: 10px;
    margin-left: 0px;
    font-size: 15px;
    font-weight: 400;
    text-decoration: none;
    color: #393e46;
  }

  .link-style {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.88);
    font-weight: bold;
    cursor: pointer;
  }
`;
