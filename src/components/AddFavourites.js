 import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import styled from 'styled-components';
import DisplaySong from './DisplaySong';
const AddFavourites = () =>{
  // const[{favorite}]=useDataLayerValue();
  const favor=JSON.parse(localStorage.getItem("favour"));
  console.log(favor)
  return (
     <Container>

   {favor.length === 0 && <h1>No favourite yet...!</h1> }

    {favor.length !== 0 && <div >
    <h1>Your Favourites</h1>
   
  <div className="contain ">

    {
       favor.map((song) => (
        <DisplaySong key={song._id} song={song} />

      ))
    }
  </div>

</div>}

     </Container>
  )
}

export default AddFavourites


const Container=styled.div`

position: fixed;
width:80%;
height: 87vh;
left:20%;
top:92px;
flex:1;
padding: 10px;
background-color: #fff;
overflow: scroll;

h1{
  border-bottom:2px solid red;
  width: 50%;
  margin :10px;
}
.contain{
  display: flex;
  flex-wrap: wrap;
}


`;
