import React from "react";
import styled from "styled-components";

function PageBreak() {
  return <PageBreakCss />;
}

export default PageBreak;

const PageBreakCss = styled.hr`
  width: 100%;

  margin: 30px 0;
  height: 2px;
  border: none;
  background: -webkit-gradient(
    linear,
    0 100%,
    100% 0,
    from(transparent),
    to(transparent),
    color-stop(50%, rgba(0, 0, 0, 0.1))
  );
`;
