import React from 'react'
import styled from 'styled-components'
import { useDataLayerValue } from "../DataLayer";
import { useState,useEffect } from 'react'
import DisplaySong from './DisplaySong';
const Seaching = () => {
    const [song, setSong] = useState(null);
    const [flag , setFlag ] = useState(false);
    const [{searchItems}]=useDataLayerValue()
    // console.log("search " + searchItems)

    const capitalizeFirstLetter = (input) => {

      // console.log("imput "+input)
        const words = input?.split(' ');
        
        const capitalizedWords = words?.map(word => {
          if (word.length === 0) {
            return '';
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
      
        // Join the words with a plus sign
        const result = capitalizedWords?.join('+');
      
        return result;
       
      };
    
      const capitalizedSearchText = capitalizeFirstLetter(searchItems);
      // console.log(capitalizedSearchText);
      
    
      const fetchSearchSong = async () => {
        try {
          const data = await fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"title":"${capitalizedSearchText}"}`, {
            headers: {
              'projectId': 'f104bi07c490'
            }
          });
          const json = await data.json();
          console.log('data'+json);
    
          if (json.status === "success" && json.data.length > 0) {
            // Data request was successful and data is received
            setFlag(false);
            setSong(json.data[0]);
          
          } else {
            // Data request failed or no data received
             
            setFlag(true);
          }
        } catch (error) {
          // Handle any network or other errors
          console.error(error);
          setFlag(true);
        }
      }
    
      useEffect(() => {
        fetchSearchSong();
      }, [capitalizedSearchText])
  return (
     <Container>
         {song ? (
        <>
          <div className='headings'>
            <h2>Song Name :{song?.title}</h2>
            <h3>Artist : {song.artist[0].name}</h3>
          </div>
          <div className='artist_info'>
            <img className='' src={song.artist[0].image} alt={song.artist[0].name} />
             
              <p>{song.artist[0].description}</p>
              <p>
                Language:
                {song.artist[0].languages.map((language) => language).join(', ')}
              </p>
            </div>
           
          <div className='song'>
            <DisplaySong key={song._id} song={song} />
          </div>

        </>
      ) : (
      
        flag ? <></> : <h2>Loading......</h2>
      )}
      {
        flag && <h3>SONG NOT FOUND OR ...CHECK YOUR SPELLING ...</h3>
      }
     </Container>
  )
}

export default Seaching

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
display: flex;
flex-direction: column;

.headings{
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 10px;
  gap:10px;
  height: 90px;
  width: 50vw;
 

}

.artist_info{
  display: flex;
  flex-direction: column;
  margin: 10px;
  
  img{
    height: 40vh;
    width: 30vw;
    border-radius: 15px;
    margin-bottom: 10px;
}
p{
  width: 70vw;

}
}
.song{
  display: flex;
  flex-wrap: wrap;
}

`;