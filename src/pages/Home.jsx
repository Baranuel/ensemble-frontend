import React from "react";
import styled from "styled-components";
import picture from "../assets/clip-333@3x.png";
import GenericButton from "../components/GenericButton";

function Home() {
  return (
    <HomePage>
      <IntroDiv>
        <TextDiv>
          <Heading>
            Stedet hvor amatørmusikere finder hinanden og spiller musik sammen
          </Heading>
          <ButtonDiv>
            <GenericButton text="Instrument" />
            <PrimaryButton className text="Find" />
          </ButtonDiv>
        </TextDiv>
        <ImgDiv>
          <Img src={picture} alt="" />
        </ImgDiv>
      </IntroDiv>
    </HomePage>
  );
}

export default Home;

const HomePage = styled.div`
  height: 100vh;
  width: 75%;
  margin: 0 auto;
`;

const IntroDiv = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 1rem;
`;

const ButtonDiv = styled.div`
  margin-top: 2.5rem;
  flex-wrap: wrap;
  display: flex;
  align-items: flex-start;
  justify-items: flex-start;
  text-align: start;
  height: unset;
`;

const Heading = styled.h1`
  width: 25ch;
  font-size: 2.75vw;
  color: #bf1e2e;
`;

const PrimaryButton = styled(GenericButton)`
  background: #353a5d;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid #353a5d;
`;

const ImgDiv = styled.div`
  display: flex;
  padding: 0rem;
  justify-content: center;
  width: 60%;
  height: 60%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;
