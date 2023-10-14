import React, { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "./images/BackgroundImage";
// import Header from "./Header";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const projectId = "f104bi07c490";

  let headersList = {
    projectId: projectId,
    "Content-Type": "application/json",
  };

  let reqOptions = {
    url: "https://academics.newtonschool.co/api/v1/user/signup",
    method: "POST",
    headers: headersList,
  };

  const signup = async () => {
    try {
      let response = await axios.request(reqOptions);
      console.log(response);
      if (response.status === 201) {
        console.log(response);

        alert("Successfully Signed Up");

        navigate("/login");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      console.error(error, errMsg);
      if (errMsg === "User already exists") {
        alert("User already exists");
        navigate("/login");
      } else {
        console.log("error");
      }
    }
  };

  const handleSignUp = async () => {
    const bodyContent = JSON.stringify({
      name: username,
      email: email,
      password: password,
      appType: "music",
    });

    reqOptions.data = bodyContent;

    await signup();
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <FormContainer>
          <Form>
            <Title>Sign Up</Title>
            <h1>Apple Music </h1>

            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="btn" onClick={handleSignUp}>
              Sign up
            </Button>
            <Button className="btn" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </FormContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
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
  margin-right: 20px;
`;
const Headers = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  color: white;
  padding: 1rem;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 1rem 2rem;
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

export default Signup;
