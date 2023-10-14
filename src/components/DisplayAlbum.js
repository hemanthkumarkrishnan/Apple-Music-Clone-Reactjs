import React from 'react'
import styled from "styled-components"

function DisplayAlbum({album}) {
  return (
     <Container>
         <img  src={album.image} alt={album.title} />
            <h5>{album.title}</h5>

     </Container>
  )
}

export default DisplayAlbum

const Container=styled.div`
    margin: 10px;
    padding: 10px;
    width:200px;
   
    
    img{
        height: 150px;
        width: 150px;
        border-radius:8px;
    }

`;