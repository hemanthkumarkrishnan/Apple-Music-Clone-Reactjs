import React, { useState,useEffect,useRef } from "react";
import styled from "styled-components";
import { Shuffle } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { VolumeDown } from "@mui/icons-material";
import { useDataLayerValue } from "../DataLayer";
import PauseIcon from '@mui/icons-material/Pause';
function Navbar() {
  const [volume, setVolume] = useState(50);
  const [{songs, isPlaying, currentSong, playbody }, dispatch] =
    useDataLayerValue();
    const audioEle=useRef();

  useEffect(() => {
    if (!playbody) {
      dispatch({
        type: "SET_ CURRENTSONG",
        currentSong: songs[0],
      });
    }
  }, [playbody, songs]);

  useEffect(()=>{
    if(isPlaying){
      audioEle.current.play();
    }else{
      audioEle.current.pause();
    }
  },[isPlaying])
  console.log(currentSong);
  console.log(currentSong ?.artist?.[0].name);
  // console.log(currentSong?.audio_url);

const skipBack=() =>{
 
  const index = songs.findIndex(x => x.title == currentSong.title)
  console.log(index)
  if(index==0){
    dispatch({
      type: "SET_ CURRENTSONG",
      currentSong: songs[songs.length-1],
    });
  }else{
    dispatch({
      type: "SET_ CURRENTSONG",
      currentSong: songs[index-1],
    });
  }
 
}

const skipNext=() =>{
 
  const index = songs.findIndex(x => x.title == currentSong.title)
  console.log(index)
  if(index== songs.length-1){
    dispatch({
      type: "SET_ CURRENTSONG",
      currentSong: songs[0],
    });
  }else{
    dispatch({
      type: "SET_ CURRENTSONG",
      currentSong: songs[index+1],
    });
  }
 
}


const handleVolumeChange = (event, newValue) => {
  console.log(event)
  console.log(newValue)
  setVolume(newValue);
};

  return (
    <Container>
      <div className="nav__left">
        <audio src={currentSong?.audio_url} ref={audioEle}/>
        <SkipPrevious className="nav__icon" onClick={skipBack} />
        {
          isPlaying ? < PauseIcon
          fontSize="large"
          className="nav__icon"
          onClick={() => {
            dispatch({
              type: "SET_ISPLAYING",
              isPlaying: !isPlaying,
            });
          }}
        /> : <PlayCircleOutline
        fontSize="large"
        className="nav__icon"
        onClick={() => {
          dispatch({
            type: "SET_ISPLAYING",
            isPlaying: !isPlaying,
          });
        }}
      />
        }
        <SkipNext className="nav__icon" onClick={skipNext} />
      </div>

      <div className="nav__center">
        <img
          src={currentSong?.thumbnail}
          alt=""
          className="nav__albumLogo"
        />
        <div className="nav__songInfo">
          <h4>{currentSong ?. artist ?.[0].name}</h4>

          <p>{currentSong?.title}</p>
        </div>
      </div>

      <div className="nav__right">
            <VolumeDown />
            <Slider  className="vol_slider" aria-labelledby="continuous-slider" value={volume} onChange={handleVolumeChange}/>
        <div className="vol">{volume}%</div>
      </div>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  flex: 1;
  height: 100px;
  width: 79%;
  top: 0;
  position: fixed;
  left: 20%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: rgba(60, 60, 67, 0.03);

  .nav__left {
    flex: 0.3;
    padding: 25px;
    color: #393e46;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    max-width: 200px;
  }
  .nav__center {
    flex: 0.4;
    display: flex;
    align-items: center;
    color: #393e46;
    width: 8px;
    border: 0.2px solid #5c5470;
    margin: 15px;
    border-radius: 5px;
    justify-content: space-between;

    .nav__albumLogo {
      height: 50px;
      width: 60px;
      margin-right: 20px;
      object-fit: contain;
      border-right: 0.2px solid #5c5470;
    }

    h4 {
      margin-bottom: 5px;
      
    }
    .nav__songInfo {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;

      h4{
        
      }
    }
  }
  .nav__right {
    display: flex;
    color: #393e46;
    justify-content: space-between;
    align-items: center;
    max-width: 200px;
    flex: 0.3;
    flex-wrap:nowrap ;
    /* overflow: hidden; */
    .vol_slider{
      color: #393e46;

    }
    .vol{
      margin-left:10px ;
      margin-top:7px ;
      margin-bottom:10px ;
      font-size: 15px;
      font-weight: 500;
    }
  }
  .nav__icon:hover,
  .nav__white:hover {
    transition: transform 0.2s ease-in-out;
    transform: scale(1.2) !important;
  }

  .nav__right * .MuiSlider-root {
    color: #393e46;
  }





  @media (max-width: 650px) {
    .nav__left {
      display: none;
    }
    .nav__center {
      flex:1;
    }
    .nav__right{
      display: none;
    }
  }
`;
