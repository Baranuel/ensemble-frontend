import React, { useContext, useState } from "react";
import styled from "styled-components";
import GenericButton from "./GenericButton";
import { User } from "@styled-icons/boxicons-solid/User";
import { LocationDot } from "@styled-icons/fa-solid/LocationDot";
import { Guitar } from "@styled-icons/fluentui-system-filled/Guitar";
import { AuthContext } from "../context/AuthContextProvider";

function Ensemble(props) {
  const { ensemble, user } = props;
  const userContext = useContext(AuthContext);
  const { access_token } = userContext;

  const [loading, setLoading] = useState(false);

  const handleJoinEnsemble = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/ensemble/addMember", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ensembleId: ensemble._id, userId: user._id }),
    });
    setLoading(false);
  };

  const isUserMember = () => {
    return ensemble.members.find((member) => member._id === user._id)
      ? true
      : false;
  };

  const isUserCreator = () => {
    return ensemble.creator._id === user._id ? true : false;
  };

  return (
    <EnsembleCard>
      <Wrapper>
        <Heading>{ensemble.title} </Heading>
        <Genre>{ensemble.genre}</Genre>

        <IconKey>
          <UserIconCss />
          <h4>Creator: </h4>
          {isUserCreator() ? <p>You</p> : <p>{ensemble.creator.username}</p>}
        </IconKey>

        <IconKey>
          <GuitarCss />
          <h4>Instruments: </h4>
          {ensemble.instruments}
        </IconKey>

        <ul>
          <IconKey>
            <UserIconCss />
            <h4>Members:</h4>
            {ensemble.members.map((member, ix) => (
              <li style={{ listStyleType: "none" }} key={ix}>
                {member.firstName}
              </li>
            ))}
          </IconKey>
        </ul>
      </Wrapper>

      <BottomBanner>
        <IconKey>
          <LocationDotCss />
          <h4>Location: </h4>
          {ensemble.location}
        </IconKey>
        {!isUserCreator() && !isUserMember() && (
          <ButtonCss
            isLoading={loading}
            onClick={() => handleJoinEnsemble()}
            text="Join Group"
          />
        )}
      </BottomBanner>
    </EnsembleCard>
  );
}

export default Ensemble;

const ButtonCss = styled(GenericButton)`
  color: #bf1e2f;
  font-family: Montserrat;
  font-weight: 700;
  background: white;
`;

const BottomBanner = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 1rem;
  color: white;
  border-radius: 0 0 10px 10px;
  align-items: center;
  justify-content: space-between;
  background: rgba(53, 58, 93, 1);
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
  }
`;

const EnsembleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  min-height: 250px;
  border-radius: 10px;
  margin: 1rem 1rem 1rem 0;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
`;

const Genre = styled.h3`
  font-family: Oswald;
  font-weight: 600;
  color: #bf1e2f;
  margin: 0.5rem 0;
`;
const IconKey = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0;

  h4 {
    margin-right: 0.25rem;
    font-family: Montserrat;
    font-weight: 600;
  }

  svg {
    margin-right: 0.25rem;
  }
`;

const Heading = styled.h1`
  font-family: Montserrat;
  color: #353a5d;
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 0.25rem;
`;

const UserIconCss = styled(User)`
  height: 20px;
  width: 20px;
  color: #353a5d;
`;
const GuitarCss = styled(Guitar)`
  height: 20px;
  width: 20px;
  color: #353a5d;
`;
const LocationDotCss = styled(LocationDot)`
  height: 20px;
  width: 20px;
  color: white;
`;
