import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useDataLayerValue } from "../DataLayer";
import axios from "axios";
import { Outlet, Navigate } from "react-router-dom";

// const ki=useDataLayerValue()
// console.log(ki)

function Layout() {
  const [{ token, user }, dispatch] = useDataLayerValue();

  const _token = localStorage.getItem("jwtToken");

  useEffect(() => {
    //set token
    const user = localStorage.getItem("userName");
    //emptying localstorage
    // localStorage.setItem("jwtToken","");

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      dispatch({
        type: "SET_USER",
        user: user,
      });
    }
  }, [token]);

  // console.log("token =" + token);
  // console.log("user =" + user);

  // Not logged in protect the routes
  if (!_token) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <Container>
        <Outline>
          <Sidebar />
          <Navbar />
        </Outline>
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;

const Container = styled.div`


@media (max-width: 700px) {
    
.side{
  position:relative;
}

  }
 
background-color: rgba(255, 255, 255, 0.64);;
`;
const Outline = styled.div`
 

`;
