import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetSpecificGroup from "../hooks/useGetSpecificGroup";
import CreatorLabel from "../components/CreatorLabel";
import GenericButton from "../components/GenericButton";
import { AuthContext } from "../context/AuthContextProvider";
import useGetUser from "../hooks/useGetUser";

function Group() {
  const { user } = useGetUser();
  const { access_token } = useContext(AuthContext);
  //we get the id of the ensemble from url by using this hook
  const { _id } = useParams();

  //we pass the id into our custom hook so we can get a specific ensemble based on the Id and show it.
  const { specificEnsemble, setSpecificEnsemble } = useGetSpecificGroup(_id);

  const userIsMember = () => {
    return specificEnsemble.members.find(
      (member) => member.email === user.email
    )
      ? true
      : false;
  };

  const handleJoinEnsemble = async () => {
    const response = await fetch("http://localhost:3000/ensemble/addMember", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ensembleId: specificEnsemble._id,
        userId: user._id,
      }),
    });
    const data = await response.json();
    setSpecificEnsemble((prev) => ({
      ...prev,
      data,
    }));
  };

  const populateMembers = () => {
    if (!specificEnsemble) return;

    return specificEnsemble.members.map((member) => {
      return (
        <CreatorLabel
          image="https://i.pravatar.cc/300"
          email={member.email}
          phone="(123) 456-7890"
          name={member.username}
        />
      );
    });
  };

  return (
    <GroupPage>
      {specificEnsemble && (
        <Wrapper>
          <GroupCss>
            <h1>{specificEnsemble.title}</h1>
            <Details>
              <Img src="https://i.pravatar.cc/300" />
              <div>
                <Info>
                  <h3>Instrument:</h3>
                  <span>{specificEnsemble.instruments}</span>
                </Info>
                <Info>
                  <h3>Location:</h3>
                  <span>{specificEnsemble.location}</span>
                </Info>
                <Info>
                  <h3>Genre:</h3>
                  <span>{specificEnsemble.genre}</span>
                </Info>
                <Info>
                  <h3>Date of Creation:</h3>
                  <span>{specificEnsemble.instruments}</span>
                </Info>
                <Info>
                  <h3>Level:</h3>
                  <span>{specificEnsemble.instruments}</span>
                </Info>
              </div>
            </Details>
            <Info>
              <h3>Description:</h3>
              <p>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by{" "}
              </p>
            </Info>
            <ButtonCss className="className" text="Contact Creator" />
            {!userIsMember() && (
              <ButtonCss
                onClick={() => handleJoinEnsemble()}
                className="className"
                text="Join Ensemble"
              />
            )}
          </GroupCss>
          <MembersCss>
            <CreatorCss>
              <CreatorLabel
                image="https://i.pravatar.cc/300"
                email={specificEnsemble.creator.email}
                phone="(123) 456-7890"
                name={specificEnsemble.creator.username}
              />
            </CreatorCss>
            <MemberCss> {populateMembers()}</MemberCss>
          </MembersCss>
        </Wrapper>
      )}
    </GroupPage>
  );
}

export default Group;

const ButtonCss = styled(GenericButton)`
  margin-top: 1rem;
  margin-right: 1rem;
  font-size: 1.2rem;
  background: #bf1e2f;
  color: white;
`;

const CreatorCss = styled.div`
  height: 150px;
  display: flex;
  border-radius: 10px;
  background: #353a5d;
  border: 1px solid #efeded;
`;

const MemberCss = styled.div`
  overflow-y: scroll;
  height: 100%;
  border-radius: 10px;
  background: #efeded;
  border: 2px solid #efeded;
`;

const GroupPage = styled.div`
  height: 90vh;
  width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const GroupCss = styled.div`
  width: 70%;
  margin: 2rem;
`;
const Img = styled.img`
  border-radius: 10px;
  width: 300px;
  height: 250px;
  margin-right: 2rem;
  background: blue;
`;
const MembersCss = styled.div`
  min-width: 30%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem;
`;
const Details = styled.div`
  margin-top: 1rem;
  margin-bottom: 4rem;
  display: flex;
`;

const Info = styled.div`
  margin: 0.75rem 0;

  h3 {
    font-size: 1.5rem;
    display: inline;
    margin-right: 1rem;
  }
  span {
    font-size: 1.5rem;
    font-wight: bold;
    display: inline;
  }

  p {
    font-size: 1.3rem;
  }
`;
