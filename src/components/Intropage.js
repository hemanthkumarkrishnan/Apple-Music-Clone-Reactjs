import React from 'react'
import styled from 'styled-components'
import BackgroundImage from './images/BackgroundImage'
import { useNavigate } from 'react-router-dom'
function Intropage() {
const navigate=useNavigate();
    const handleClick = () =>{
        navigate("/signup")
    }
  return (
    <Container>
        <BackgroundImage />
        <button onClick={handleClick}>Connect Apple Music</button>
    </Container>
  )
}





const Container=styled.div`

height: 100vh;
width: 100vw;
position: relative;
display:flex ;
justify-content: center;
align-items: center;
transition: background-colour 1s ;
 button{
 position: absolute;
font-size:.8rem;
height:  5vh;
width: 20vw;
margin-bottom: 450px;
background-color: #e3e3e3; 
font-weight:700;
border-radius: 10px;
padding: 0%;
transition:all cubic-bezier(0.55, 0.055, 0.675, 0.19) 300ms;
    
 } 

 button:hover{
    background-color:#feffdf;
    font-size:.9rem;
 }

`

export default Intropage