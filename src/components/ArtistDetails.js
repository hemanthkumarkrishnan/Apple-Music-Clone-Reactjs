 
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DisplaySong from './DisplaySong';

const ArtistDetails = () => {
    const {resId} = useParams();
    const [detail , setDetails] = useState(null);
    const fetchartist = async() => {
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${resId}`, {
            headers: {
                'projectId':'f104bi07c490'
            }
        })

        const json = await data.json();
        setDetails(json.data);
}

useEffect(()=>{
    fetchartist();
},[]);

  return (
     <Container>
                 <div className="main_container">
         
         <div >
           <h1 className="heading1">{ detail?.name}</h1>
         </div>
         <div className='image_description'>
         <div  >
           <img className="image" src={detail?.image} />
         </div>
       
       
         <div >
           <div className="description">
             <h2 className="heading2">{detail?.description}</h2>
             <h3 className="heading3">
             language :
               { detail?.languages.map((languages) =>languages).join(", ")}
             </h3>
           </div>
         </div>
         </div>
         <h2>Songs</h2>
         <div className="contain">
            
             {detail?.songs.map((song) => (
               <DisplaySong key={song._id} song={song} />
             ))}
            
         </div>
         </div>
        
     </Container>
  )
}

export default ArtistDetails

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

.main_container{
  display: flex;
  flex-direction:column;

  h2{
    margin:20px
  }

  h1{
    border-bottom: 1px solid red;
    width:50%;
  }
  .image_description{
    display: flex;
    flex-wrap:wrap;
    justify-content:space-btween;
    margin-top:20px;
    margin-bottom: 30px;

    .image{
      width: 40wv;
      height: 40vh;
      border-radius:10px;
      margin-right:50px;
      
    }
    .heading2{
      font-size:25px;
      margin-bottom:30px;
      height:100px;
      width:500px;
    }
    .heading3{
      font-size:20px;
      height:100px;
      width:500px;
      margin-bottom:10px;
      margin-left: 20px;
    }

  }

  .contain{
    display: flex;
    flex-wrap: wrap;
     
  }
}


`;