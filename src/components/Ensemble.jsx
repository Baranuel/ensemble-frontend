import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GenericButton from "./GenericButton";
import { User } from "@styled-icons/boxicons-solid/User";
import { LocationDot } from "@styled-icons/fa-solid/LocationDot";
import { Guitar } from "@styled-icons/fluentui-system-filled/Guitar";
import { AuthContext } from "../context/AuthContextProvider";
import { Check2 } from "@styled-icons/bootstrap/Check2";
import { Admin } from "@styled-icons/remix-fill/Admin";
import JazzIcon from "../assets/icons8-jazz.svg";

function Ensemble(props) {
  const { ensemble, user, refetch } = props;

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
    const data = await response.json();
    await refetch();
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

  const showMemberNames = () => {
    const numberOfMembers = ensemble.members.length;
    const shortenedArrayOfMembers = ensemble.members.slice(0, 4);

    switch (true) {
      case numberOfMembers < 4:
        return ensemble.members.map((member, index) => {
          return (
            <li key={index}>
              <p> {member.firstName}</p>
            </li>
          );
        });

      case numberOfMembers > 4:
        return (
          <li>
            {shortenedArrayOfMembers.map((member, index) => (
              <p key={index}> {member.firstName}</p>
            ))}
            <SpanCss>...</SpanCss>
          </li>
        );
    }
  };

  return (
    <EnsembleCard>
      <LinkCss to={`/group/${ensemble._id}`}>
        <JazzIconCss src={JazzIcon} />
        <Wrapper>
          <Heading>{ensemble.title} </Heading>
          <Genre>{ensemble.genre}</Genre>

          <IconKey>
            <AdminCss />
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
              {showMemberNames()}
            </IconKey>
          </ul>
        </Wrapper>
      </LinkCss>

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
        {isUserMember() && (
          <IsMember>
            <CheckCss />
            Member
          </IsMember>
        )}
        {isUserCreator() && (
          <IsCreator>
            <AdminCss color="white" />
            Creator
          </IsCreator>
        )}
      </BottomBanner>
    </EnsembleCard>
  );
}

export default Ensemble;

const LinkCss = styled(Link)`
  text-decoration: none;
  color: unset;
`;

const ButtonCss = styled(GenericButton)`
  background-color: #bf1e2f;
  font-family: Montserrat;
  font-weight: 700;
  color: white;
`;

const SpanCss = styled.span`
  font-weight: 700;
`;
const IsCreator = styled.h3`
  color: white;
  margin-left: 0.25rem;
  font-family: Montserrat;
  font-size: 0.85rem;
  font-weight: 700;
`;
const IsMember = styled.h3`
  color: #56a4e8;
  font-family: Montserrat;
  font-size: 0.85rem;
  font-weight: 700;
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

const JazzIconCss = styled.img`
  position: absolute;
  opacity: 0.5;
  right: -15%;
  bottom: 15%;
  height: 200px;
  width: 200px;
`;

const EnsembleCard = styled.div`
  overflow: hidden;
  position: relative;
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

  li p {
    margin-left: 0.25rem;
  }
`;

const Heading = styled.h1`
  font-family: Montserrat;
  color: #353a5d;
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 0.25rem;
`;

const AdminCss = styled(Admin)`
  width: 20px;
  color: ${(p) => (p.color ? p.color : "#353a5d")};
`;

const UserIconCss = styled(User)`
  height: 20px;
  width: 20px;
  color: #353a5d;
`;

const CheckCss = styled(Check2)`
  height: 20px;
  width: 20px;
  margin-right: 0.25rem;
  color: #56a4e8;
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
