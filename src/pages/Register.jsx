import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

function Register() {
  const [value, setValue] = useState({});
  const [user, setUser] = useState(undefined);
  const [errors, setErrors] = useState(undefined);
  const navigate = useNavigate();

  //getting all the variables from our custom hook
  const { login, setLoading } = useContext(AuthContext);

  //dynamically setting the values for each input we have.
  //storing it locally in state so we can send the whole form at once.
  function handleChange(event) {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function sendData(e) {
    e.preventDefault();
    setLoading(true);
    await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
        //if the response status is not "created" then we store the errors in local state and show them.
        if (data.statusCode !== 201) return setErrors(data.message);
        setErrors(false);
        //if we create a user successfully then we get the token for them and log them in.
        return login(data.access_token);
      })
      .then(() => navigate("/profile"))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <RegisterPage>
      <FormDiv>
        <Form onSubmit={sendData} method="POST">
          <h2>Register new account</h2>
          <label htmlFor="">First Name </label>
          <br />
          <input name="firstName" onChange={handleChange} type="text" />
          <br />
          <label htmlFor="">Last Name </label>
          <br />
          <input name="lastName" onChange={handleChange} type="text" />
          <br />
          <label htmlFor="">Username </label>
          <br />
          <input name="username" onChange={handleChange} type="text" />
          <br />
          <label htmlFor="">Email </label>
          <br />
          <input name="email" onChange={handleChange} type="email" />
          <br />
          <label htmlFor="">Password </label>
          <br />
          <input name="password" onChange={handleChange} type="password" />
          <br />
          <label htmlFor="">Instruments </label>
          <br />
          <input name="instruments" onChange={handleChange} type="text" />
          <br />
          <label htmlFor="">Date of birth </label>
          <br />
          <input name="dob" onChange={handleChange} type="date" />
          <br />
          {errors && (
            <Errors>
              {errors?.map((err, ix) => (
                <p key={ix}>{err}</p>
              ))}
            </Errors>
          )}
          <button className="signup-button" type="submit">
            Register
          </button>
        </Form>
      </FormDiv>
    </RegisterPage>
  );
}

export default Register;

const Errors = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: pink;
  border-radius: 10px;
  color: red;
`;

const RegisterPage = styled.div`
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
