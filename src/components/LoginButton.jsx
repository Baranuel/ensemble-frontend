import React from "react";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
import styled from "styled-components";

function LoginButton(props) {
  return (
    <LinkCss to={`${props.path}`}>
      <ButtonCss bgColor={props.bgColor}>{props.name}</ButtonCss>
    </LinkCss>
  );
}

export default LoginButton;

const ButtonCss = styled.button`
  background-color: white;
  align-self: center;
  min-width: 150px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: #353a5d;
`;

const LinkCss = styled(Link)`
  text-decoration: none;
`;
