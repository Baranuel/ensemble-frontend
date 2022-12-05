import React from "react";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
import styled from "styled-components";

function CreateAccButton(props) {
  return (
    <LinkCss to={`${props.path}`}>
      <ButtonCss bgColor={props.bgColor}>{props.name}</ButtonCss>
    </LinkCss>
  );
}

export default CreateAccButton;

const ButtonCss = styled.button`
  background-color: #353a5d;
  margin: 0 0.5rem;
  font-size: clamp(0.95rem, 2vw, 1.2rem);
  min-width: 150px;
  width: 100%;
  color: white;
`;

const LinkCss = styled(Link)`
  text-decoration: none;
`;
