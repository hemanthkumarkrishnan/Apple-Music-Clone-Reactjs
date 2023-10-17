
import styled from 'styled-components'
import React, {useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import DisplaySong from './DisplaySong';
import ArtistName from './ArtistName';
const AlbumPage = () => {
    const {resId} = useParams();
    const [albumData , setAlbumData] = useState(null);
    const fetchSong = async() =>{
        const data = await fetch(`https://academics.newtonschool.co/api/v1/music/album/${resId}`, {
            headers: {
                'projectId': 'f104bi07c490'
            }
        })
         
        const json = await data.json();
        setAlbumData(json.data);
 
    }
    useEffect(()=>{
        fetchSong();
    },[])
  return (
     <Container>
         <div className="main_container">
         
          <div >
            <h1 className="heading1">{albumData?.title}</h1>
          </div>
          <div className='image_description'>
          <div  >
            <img className="image" src={albumData?.image} />
          </div>
        
        
          <div >
            <div className="description">
              <h2 className="heading2">{albumData?.description}</h2>
              <h3 className="heading3">
                Artist :
                {albumData?.artists.map((artist) => artist.name).join(", ")}
              </h3>
            </div>
          </div>
          </div>
          <h2>Songs</h2>
          <div className="contain">
             
              {albumData?.songs.map((song) => (
                <DisplaySong key={song._id} song={song} />
              ))}
             
          </div>
          <h2>Artist</h2>
          <div className="contain">
             
              {albumData?.artists.map((artist) => (
                <Link to={"/artistdetails/" +artist._id} key={artist._id} className='name'>
                  <ArtistName artist={artist} />
                </Link>
              ))}
            </div>
         
      </div>

     </Container>
  )
}

export default AlbumPage

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
  .name{
    text-decoration: none;
    color:black;
  }
}

`;