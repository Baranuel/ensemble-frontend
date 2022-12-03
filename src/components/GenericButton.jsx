import React from "react";
import styled from "styled-components";

function GenericButton(props) {
  const { isLoading, onClick, text, className } = props;
  return (
    <Button className={className} onClick={onClick}>
      {isLoading ? "...loading" : text}
    </Button>
  );
}

export default GenericButton;

const Button = styled.button`
  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    border: none;
    outline: none;
  }
`;
