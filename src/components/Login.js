import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate,Navigate } from "react-router-dom";
import BackgroundImage from "./images/BackgroundImage";
import axios from "axios";

const token = localStorage.getItem("jwtToken");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const projectId = "f104bi07c490";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/login",
    method: "POST",
    headers: headersList,
  };

  const login = async () => {
    try {
      let response = await axios.request(reqOptions);
 
      if (response.status === 200) {
 

        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("userName", response.data.data.name);

        const token=localStorage.getItem("jwtToken");
        console.log(token)
        const user=localStorage.getItem("userName");
   
      
        if (token) {
          navigate("/home", {replace:true});
        } else {
          console.log('No data found in localStorage and no token found.');
        }      
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
    }
  };

  const handleLogin = () => {
    const bodyContent = JSON.stringify({
      email: email,
      password: password,
      appType: "music",
    });

    reqOptions.data = bodyContent;

    login();
  };

  const handleSignUp = () => {
    navigate("/signup");
  };


  if(token){
    return <Navigate to="/home" />
  }

  return (
    <Container>
      <BackgroundImage />

      <div className="content">
        <FormContainer>
          <Form>
            <Title>Login</Title>
            <h2>Apple Music</h2>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login to your account</Button>
            <Button onClick={handleSignUp}>create your account</Button>
          </Form>
        </FormContainer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    /* background-color: rgba(0, 0, 0, 0.5); */
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`;

const FormContainer = styled.div`
  background-color: #111111;
  width: 80%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 0.2rem;
  color: white;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.2rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1rem;
`;

export default Login;
