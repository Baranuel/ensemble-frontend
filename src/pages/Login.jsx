import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

function Login() {
  const [loginForm, setLoginForm] = useState();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    //dynamically creating object properties based on each input we have.
    //saving it in local state so we can send it ot the backend.
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();
      //here we receive logged in user with access token, we send to "login" function in our hook
      // the function sets the access token into Local storage for us.
      await login(data.access_token);
      navigate("/profile");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <LoginPage>
      <FormDiv>
        <Form onSubmit={sendData} method="POST">
          <h2>Log in</h2>
          <label htmlFor="">Email</label>
          <input name="email" onChange={handleChange} type="text" />
          <label htmlFor="">Password </label>
          <input name="password" onChange={handleChange} type="password" />
          <button className="signup-button" type="submit">
            Login
          </button>
        </Form>
      </FormDiv>
    </LoginPage>
  );
}

export default Login;

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 0 auto;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const Form = styled.form`
  width: 100%;
  padding: 4rem;
  border-radius: 10px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  background: white;

  h2 {
    margin-bottom: 2rem;
  }

  label {
    color: #696969;
  }

  input {
    background: white;
    border: none;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
    color: black;
    padding: 0.5rem;
    border-radius: 5px;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
  }

  button {
    width: 100%;
    padding: 0.8rem;
    font-weight: bold;
  }
`;
