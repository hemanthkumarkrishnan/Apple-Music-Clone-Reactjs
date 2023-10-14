import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intropage from "./components/Intropage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Layout from "./components/Layout";
// import Home from "./components/Home";
import BodyHome from "./components/BodyHome";
import Contact from "./components/Contact";
import Subscription from "./components/Subscription";
import AlbumPage from "./components/AlbumPage";
import ArtistDetails from "./components/ArtistDetails";
import AddFavourites from "./components/AddFavourites";
import PLaylist from "./components/PLaylist";
import Seaching from "./components/Seaching";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Intropage />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/login"} element={<Login />} />
        <Route element={<Layout />}>
          <Route path={"/home"} element={<BodyHome />} />
          <Route path={"/subscription"} element={<Subscription />} />
          <Route path={"/albumpage/:resId"} element={<AlbumPage />} />
          <Route path={"/artistdetails/:resId"} element={<ArtistDetails />} />
          <Route path={"/add-fav"} element={<AddFavourites />} />
          <Route path={"/playlist/:resId"} element={<PLaylist />} />
          <Route path={"/searchit"} element={<Seaching />} />
        </Route>

        {/* Not found route */}
        <Route
          path="*"
          element={
            <div style={{ fontSize: "40px", textAlign: "center" }}>
              404 Not found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
