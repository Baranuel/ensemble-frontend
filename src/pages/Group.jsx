import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGetSpecificGroup from "../hooks/useGetSpecificGroup";
import CreatorLabel from "../components/CreatorLabel";
import GenericButton from "../components/GenericButton";

function Group() {
  const { _id } = useParams();
  const { specificEnsemble } = useGetSpecificGroup(_id);
  console.log(specificEnsemble);

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
          </GroupCss>
          <MembersCss>
            <CreatorCss>
              <CreatorLabel
                image="https://i.pravatar.cc/300"
                email="johndoe@example.com"
                phone="(123) 456-7890"
                name={specificEnsemble.creator.username}
              />
            </CreatorCss>
            <MemberCss>
              {" "}
              <CreatorLabel
                image="https://i.pravatar.cc/300"
                email="johndoe@example.com"
                phone="(123) 456-7890"
                name="John Doe"
              />
              <CreatorLabel
                image="https://i.pravatar.cc/300"
                email="johndoe@example.com"
                phone="(123) 456-7890"
                name="John Doe"
              />
              <CreatorLabel
                image="https://i.pravatar.cc/300"
                email="johndoe@example.com"
                phone="(123) 456-7890"
                name={specificEnsemble.creator.username}
              />
            </MemberCss>
          </MembersCss>
        </Wrapper>
      )}
    </GroupPage>
  );
}

export default Group;

const ButtonCss = styled(GenericButton)`
  margin-top: 1rem;
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
  width: 30%;
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
