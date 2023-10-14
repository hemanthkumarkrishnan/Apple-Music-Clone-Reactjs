import React from "react";
import { useDataLayerValue } from "../DataLayer";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useEffect, useState } from "react";
function DisplaySong({ song }) {
  const [songPlay, setSongPlay] = useState(false);
  const [audio] = useState(new Audio(song.audio_url));
  const [star, setStar] = useState(true);
  const [{currentSong,favorite,isPlaying}, dispatch] = useDataLayerValue();

  // console.log(`favroites${favorite}`);
  // console.log(`favList${favList}`);
  // console.log( song);
  // console.log( favorite);


  useEffect(() => {
    if (songPlay) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [songPlay]);

  const handlePlay = () => {
    setSongPlay(!songPlay);
    dispatch({
      type:"SET_ CURRENTSONG",
      currentSong:song,
    })
    dispatch({
      type:"SET_ISPLAYING",
      isPlaying:!isPlaying,
    })
  };

  const handelFavourite = () => {
    const songId = song._id;
    const temp = favorite.filter((fav) => fav._id !== songId);
    console.log(temp);
    if (temp.length === favorite.length) {
      dispatch({
        type: "SET_FAVORITE",
        favorite: [...favorite,song],
      });
      setStar(false);
    } else {
      dispatch({
        type: "SET_FAVORITE",
        favorite: temp,
      });
      setStar(true);
    }
  };

  return (
    <Container>
      <img src={song.thumbnail} alt={song.title} />
      <div>
        <p className="song_heading">{song.title}</p>
        <div className="fav_container">
          {star ? (
            <FavoriteBorderIcon
              className="fav_icon"
              onClick={handelFavourite}
            />
          ) : (
            <FavoriteIcon className="fav_icon" onClick={handelFavourite} />
          )}
          <button onClick={handlePlay} className="song_buttons">
            {songPlay ? (
              <PauseIcon className="icons" />
            ) : (
              <PlayArrowIcon className="icons" />
            )}
          </button>
        </div>
      </div>
    </Container>
  );
}

export default DisplaySong;

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  width: 200px;
  border-radius: 8px;

  img {
    border-radius: 8px;
    height: 150px;
    width: 150px;
  }
  .song_heading {
    font-weight: 700;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 13.5px;
    line-height: 28px;
  }
  .fav_icon {
    font-weight: 600;
    cursor: pointer;
  }

  .song_buttons {
    margin-top: 0;
    background-color: none;
    background: none;
    border: none;

    margin-left: 15%;
  }

  .fav_container {
    display: flex;
    justify-content: start;
  }
`;
