import React from "react";
import { Link } from "react-router-dom";
import LinkItem from "./LinkItem";
import styled from "styled-components";

function CreateAccButton(props) {
  return (
    <ButtonCss bgColor={props.bgColor}>
      <LinkCss to={`${props.path}`}>{props.name}</LinkCss>
    </ButtonCss>
  );
}

export default CreateAccButton;

const ButtonCss = styled.button`
  background-color: #353a5d;
  margin: 0 0.5rem;
`;

const LinkCss = styled(Link)`
  text-decoration: none;
  color: white;
`;
