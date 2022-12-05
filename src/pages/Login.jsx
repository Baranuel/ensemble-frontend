import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

function Login() {
  const [loginForm, setLoginForm] = useState();
  const userContext = useContext(AuthContext);
  const { loading, setLoading } = userContext;
  const navigate = useNavigate();

  const handleChange = (event) => {
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
      await userContext.login(data.access_token);
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
          <label htmlFor="">email</label>
          <br />
          <input name="email" onChange={handleChange} type="text" />
          <br />
          <br />
          <label htmlFor="">Password </label>
          <br />
          <input name="password" onChange={handleChange} type="password" />
          <br />
          <br />
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
`;
