import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DisplaySong from "./DisplaySong";
import styled from "styled-components";
 

const PLaylist = () => {
  const { resId } = useParams();
  const [genre, setGenre] = useState(null);
  const [filterMusic, setFilterMusic] = useState(null);

  const fetchgenre = async () => {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${resId}"}`,
      {
        headers: {
          projectId: "f104bi07c490",
        },
      }
    );

    const json = await data.json();
    // console.log(json.data);
    setGenre(json.data);
    setFilterMusic(json.data);
  };
  useEffect(() => {
    fetchgenre();
  }, [resId]);
  return (
    <Container>
      {/* {filterMusic === null && <h1>Loading...</h1>}
       {filterMusic.length === 0 &&<h1>NOT FOUND...........!!!!!</h1>} */}
       {
        filterMusic === null ? (<h1>Loading...</h1>):(<div>
            <h1>{resId}</h1>
        <div className="contain">
        {filterMusic.map((song) => <DisplaySong key={song._id} song={song} />)}
      </div>
      </div>
        )
}       
      
    </Container>
  );
};

export default PLaylist;

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

  h1 {
    border-bottom: 2px solid red;
    width: 20%;
    margin: 10px;
  }
  .contain {
    display: flex;
    flex-wrap: wrap;
  }
`;
