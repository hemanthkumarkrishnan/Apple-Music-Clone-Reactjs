import React from 'react'
import styled from 'styled-components'

function ArtistName({artist}) {
  return (
      <Container>
        <div className='Artist_container'>
        <img src={artist.image} alt='image'/>
        <h4 >{artist.name}</h4>
        </div>

      </Container>
  )
}

export default ArtistName


const Container=styled.div`

display: flex;
justify-content: center;
align-items: center;

.Artist_container{
    margin:10px;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
      width:150px;
      height: 150px;
        margin: 5px;
        padding: 5px;
        border-radius: 9999px;
    }
 


    }
    /* filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04));
    drop-shadow:(0 4px 3px rgb(0 0 0 / 0.1)); */   
 

`;