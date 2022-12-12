import React, { useContext } from "react";
import styled from "styled-components";
import LinkItem from "./LinkItem";
import CreateAccButton from "./CreateAccButton";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
function Navigation() {
  const { access_token } = useContext(AuthContext);

  return (
    <StyledNavigation>
      <Title to="/">
        <TitleHeading> Musik Samspil</TitleHeading>
        <TitleText>Skapt af DAOS - Dansk Amatororkester Samvirkle</TitleText>
      </Title>

      <Wrapper>
        <LinkItem path="/groups" name="Find Groups" />
        <LinkItem path="/profile" name="Profile" />
        {<CreateAccButton path="/register" name="Create Account" />}
        <LoginButton path="/login" name="Log in" />
        {/* <Link to="/profile">Profile</Link>
        <Link to="/groups">Log ind</Link> */}
      </Wrapper>
    </StyledNavigation>
  );
}

export default Navigation;

const StyledNavigation = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.3);
  background-color: white;
`;

const Title = styled(Link)`
  text-decoration: none;
  padding: 1rem;
`;

const TitleHeading = styled.h1`
  color: #bf1e2e;
  margin: 0;
  font-size: 2rem;
`;

const TitleText = styled.p`
  font-family: "Montserrat";
  margin-top: 0.5rem;
  margin: 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  * {
    margin: 0 1rem;
    font-size: 1.1rem;
  }
`;
