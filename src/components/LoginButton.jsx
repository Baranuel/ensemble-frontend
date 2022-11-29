import React from "react";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
import styled from "styled-components";

function LoginButton(props) {
  return (
    <ButtonCss bgColor={props.bgColor}>
      <LinkCss to={`${props.path}`}>{props.name}</LinkCss>
    </ButtonCss>
  );
}

export default LoginButton;

const ButtonCss = styled.button`
  background-color: white;
  margin: 0 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const LinkCss = styled(Link)`
  text-decoration: none;
  color: #353a5d;
`;
