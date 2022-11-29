import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LinkItem(props) {
  return <LinkCss to={`${props.path}`}>{props.name}</LinkCss>;
}

export default LinkItem;

const LinkCss = styled(Link)`
  font-weight: 500;
  text-decoration: inherit;
`;
