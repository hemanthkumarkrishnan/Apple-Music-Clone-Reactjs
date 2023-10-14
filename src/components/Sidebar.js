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
import MenuIcon from '@mui/icons-material/Menu';
import MenuIems from './MenuIems';

function Sidebar() {
  const [{user, searchItems }, dispatch] = useDataLayerValue();
  const [changeValue, setChangeValue] = useState("");
  const [menu,setMenu]=useState(false);

  const navigate = useNavigate();
  const handleChange = () => {
    dispatch({
      type: "SET_SEARCH",   
      search: changeValue,
    
    });
    // console.log(changeValue)
    setChangeValue('');
    navigate("/home/searchit")
  };
  // console.log("search "{ replace: true +searchItems);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login", { replace: true });
  }

  return (
    <Container>
      <svg
        height="20"
        viewBox="0 0 83 20"
        width="83"
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        aria-hidden="true"
      >
        <path d="M34.752 19.746V6.243h-.088l-5.433 13.503h-2.074L21.711 6.243h-.087v13.503h-2.548V1.399h3.235l5.833 14.621h.1l5.82-14.62h3.248v18.347h-2.56zm16.649 0h-2.586v-2.263h-.062c-.725 1.602-2.061 2.504-4.072 2.504-2.86 0-4.61-1.894-4.61-4.958V6.37h2.698v8.125c0 2.034.95 3.127 2.81 3.127 1.95 0 3.124-1.373 3.124-3.458V6.37H51.4v13.376zm7.394-13.618c3.06 0 5.046 1.73 5.134 4.196h-2.536c-.15-1.296-1.087-2.11-2.598-2.11-1.462 0-2.436.724-2.436 1.793 0 .839.6 1.41 2.023 1.741l2.136.496c2.686.636 3.71 1.704 3.71 3.636 0 2.442-2.236 4.12-5.333 4.12-3.285 0-5.26-1.64-5.509-4.183h2.673c.25 1.398 1.187 2.085 2.836 2.085 1.623 0 2.623-.687 2.623-1.78 0-.865-.487-1.373-1.924-1.704l-2.136-.508c-2.498-.585-3.735-1.806-3.735-3.75 0-2.391 2.049-4.032 5.072-4.032zM66.1 2.836c0-.878.7-1.577 1.561-1.577.862 0 1.55.7 1.55 1.577 0 .864-.688 1.576-1.55 1.576a1.573 1.573 0 0 1-1.56-1.576zm.212 3.534h2.698v13.376h-2.698zm14.089 4.603c-.275-1.424-1.324-2.556-3.085-2.556-2.086 0-3.46 1.767-3.46 4.64 0 2.938 1.386 4.642 3.485 4.642 1.66 0 2.748-.928 3.06-2.48H83C82.713 18.067 80.477 20 77.317 20c-3.76 0-6.208-2.62-6.208-6.942 0-4.247 2.448-6.93 6.183-6.93 3.385 0 5.446 2.213 5.683 4.845h-2.573zM10.824 3.189c-.698.834-1.805 1.496-2.913 1.398-.145-1.128.41-2.33 1.036-3.065C9.644.662 10.848.05 11.835 0c.121 1.178-.336 2.33-1.01 3.19zm.999 1.619c.624.049 2.425.244 3.578 1.98-.096.074-2.137 1.272-2.113 3.79.024 3.01 2.593 4.012 2.617 4.037-.024.074-.407 1.419-1.344 2.812-.817 1.224-1.657 2.422-3.002 2.447-1.297.024-1.73-.783-3.218-.783-1.489 0-1.97.758-3.194.807-1.297.048-2.28-1.297-3.097-2.52C.368 14.908-.904 10.408.825 7.375c.84-1.516 2.377-2.47 4.034-2.495 1.273-.023 2.45.857 3.218.857.769 0 2.137-1.027 3.746-.93z"></path>
      </svg>

      <div className="sidebarOption  side">
        <div className="search">
          <input
            type="text"
            className="search_input"
            placeholder="Search Song..."
            value={changeValue}
            onChange={(e) => setChangeValue(e.target.value)}
          />
           
            
            <button className="search_button" onClick={handleChange}>
              search
            </button>
          
        </div>
        <div className="options">
          <HomeIcon className="sidebarOption__icon" />
          <Link className="link-style" to="/home">
            Home
          </Link>
        </div>
        <div className="options">
          <FavoriteIcon className="sidebarOption__icon" />
          <Link className="link-style" to="/add-fav">
            Favorite
          </Link>
        </div>
        <div className="options">
           <LogoutIcon className="sidebarOption__icon" />
          <div className="link-style" to="/login" onClick={handleLogout}>
             {user} :Logout
          </div>
        </div>
        <div className="options">
          <AddShoppingCartIcon className="sidebarOption__icon" />
          <Link className="link-style" to="/subscription">
            Subscription
          </Link>
        </div>
      </div>

      <br  className=" side"/>
      <strong className="sidebar__title side">PLAYLISTS</strong>
      <hr  className="side"/>

      <div className="sidebarOption side">
        <div className="options__playlist">
          
          <Link className="link_playlist" to="playlist/romantic">
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

      <div className="menu">
      <MenuIcon className="menu_icon" onClick={() =>setMenu(!menu)}/>
    {
      menu && <MenuIems />
    }
      
     </div>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  height: 100vh;
  flex: 0.2;
  position: fixed;
  left: 0;
  right: 80%;
  color: rgba(0, 0, 0, 0.88);
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(60, 60, 67, 0.03);
  overflow: hidden;
  transition: 200ms all ease-in;

  svg {
    margin-right: auto;
    padding: 10px;
    height: 70px;
    width: 83px;
  }

  .sidebar__title {
    margin-left: 10px;
    padding: 5px;
    font-size: 12px;
  }

  hr {
    border: 1px solid #282828;
    width: 90%;
    margin: 10px auto;
  }
  .search {
    display: flex;
    margin-bottom: 5px;
    .search_input {
      border: 1px solid black;
      border-radius: 5px;
      width: 70%;
      margin-left: 10px;
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
    padding-left: 10px;
    padding-right: 10px;
  }
  .sidebarOption {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    :hover {
      color: rgba(0, 0, 0, 0.48);
    }

    .options {
      display: flex;
      align-items: center;
    }
  }

  .options__playlist {
    margin-top: 10px;
  }

  .link_playlist {
    margin-top: 10px;
    margin-left: 20px;
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
  .menu{
    display: none;
  }

  @media (max-width: 700px) {

    .side{
      display: none;
    }
    .menu{
    display:contents;
  }
    svg {
    margin-left:0;
    padding:0px;
    height: 70px;
    width: 83px;
  }
  .menu_icon{
    height:40px;
    width: 50px;
     :hover{
      color: rgba(0, 0, 0, 0.48);
     }
  }




  }


`;
