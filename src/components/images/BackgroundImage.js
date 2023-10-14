import React from "react";
import styled from "styled-components";
export default function BackgroundImage() {
  return (
    <Container>
      <img src={'https://images.unsplash.com/photo-1615853053515-82b51535cde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'} alt="background" />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
 
 
  img {
    height: 100vh;
    width: 100vw;
   
  }
`;