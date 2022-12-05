import React from "react";
import Spinner from "./Spinner";
import styled from "styled-components";

function GenericButton(props) {
  const { isLoading, onClick, text, className } = props;
  return (
    <Button className={className} onClick={onClick}>
      {isLoading ? <SpinnerCss className /> : text}
    </Button>
  );
}

export default GenericButton;

const SpinnerCss = styled(Spinner)`
  height: 26px;
  width: 26px;
  position: absolute;
  color: white;

  div {
    top: -80%;
    left: -75%;
    transform: translateX(100%) translateY(80%);

    height: 100%;
    width: 100%;
    border: 2px solid black;
    border-color: white transparent transparent transparent;
  }
`;

const Button = styled.button`
  position: relative;
  min-width: 125px;
  min-height: 40px;
  &:focus {
    border: none;
    outline: none;
  }

  &:active {
    border: none;
    outline: none;
  }
`;
