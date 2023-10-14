import React from "react";
import styled from "styled-components";
import { useDataLayerValue } from "../DataLayer";
import { useEffect } from "react";
import DisplaySong from "./DisplaySong";
import { useState } from "react";
import ArtistName from "./ArtistName";
import DisplayAlbum from "./DisplayAlbum";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Contact from "./Contact";

function BodyHome() {
  const [{ favorite, songs }, dispatch] = useDataLayerValue();
  const [ListOfMusic, setListOfMusic] = useState(null);
  const [newRelease, setNewRelease] = useState(null);
  const [toptrand, setTopTrand] = useState(null);
  const [ListOfAlbum, setListOfAlbum] = useState(null);

  const getListOfMusic = async () => {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song?&limit=15`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    );
    const json = await data.json();
    setListOfMusic(json.data);
  };

  const getListOfAlbum = async () => {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/music/album?&limit=10`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    );

    const json = await data.json();
    setListOfAlbum(json.data);
  };

  useEffect(() => {
    getListOfMusic();
    getListOfAlbum();
  }, []);

  useEffect(() => {
    ListOfMusic && funfilter();
  }, [ListOfMusic]);

  function funfilter() {
    let toptrend = ListOfMusic.filter((s) => s.mood === "excited");
    setNewRelease(toptrend);

    let romanticSong = ListOfMusic.filter((s) => s.mood === "romantic");

    setTopTrand(romanticSong);

    dispatch({
      type: "SET_SONGS",
      songs: ListOfMusic,
    });
  }

  return (
    <Container>
      <div className="body__header">Browse</div>
      <div className="new_release">
        <h2>New Release</h2>
        <div className="songs_display">
          {newRelease &&
            newRelease.map((song) => (
              <DisplaySong key={song._id} song={song} />
            ))}
        </div>
      </div>
      <div className="top_trending">
        <h2>Top Trending</h2>
        <div className="songs_display">
          {toptrand &&
            toptrand.map((song) => <DisplaySong key={song._id} song={song} />)}
        </div>
      </div>
      <div className="Album">
        <h2>Album</h2>
        <div className="songs_display">
          {ListOfAlbum &&
            ListOfAlbum.map((album) => (
              <Link
                className="artist_link"
                to={"albumpage/" + album._id}
                key={album._id}
              >
                {" "}
                <DisplayAlbum album={album} />
              </Link>
            ))}
        </div>
      </div>
      <div className="Artists">
        <h2>Artists</h2>
        <div className="songs_display">
          {ListOfMusic?.map((song) => (
            <Link
              className="artist_link"
              to={"artistdetails/" + song.artist[0]._id}
              key={song._id}
            >
              <ArtistName artist={song.artist[0]} />
            </Link>
          ))}
        </div>
      </div>
      <h2>More to Explore</h2>
      <Footer />
      <h2>Contact</h2>
      <Contact />
    </Container>
  );
}

export default BodyHome;

const Container = styled.div`
  position: fixed;
  width: 80%;
  height: 87vh;
  left: 20%;
  top: 92px;
  flex: 1;
  padding: 10px;
  background-color: #fff;
  overflow: scroll;

  .body__header {
    display: flex;
    flex: 1;
    color: rgba(0, 0, 0, 0.88);
    font-size: 34px;
    font-weight: 700;
    width: 90%;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  h2 {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 10px;
  }
  .songs_display {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    overflow-x: scroll;
    flex-wrap: wrap;
    overflow: visible;
  }
  .artist_link {
    text-decoration: none;
    color: black;
  }
`;
