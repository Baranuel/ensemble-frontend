import React from "react";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
import styled from "styled-components";

function LoginButton(props) {
  return (
    <ButtonCss onClick={props.onClick}>
      <Text>{props.loading ? "loading..." : props.text}</Text>
    </ButtonCss>
  );
}

export default LoginButton;

const ButtonCss = styled.button`
  background-color: #353a5d;
  margin: 0.5rem;
  padding: 0.75rem 5.5rem;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
`;

const Text = styled.p`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
`;
