import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import PageBreak from "../components/PageBreak";
import PrimaryButton from "../components/PrimaryButton";
import { AuthContext } from "../context/AuthContextProvider";
import Ensemble from "../components/Ensemble";
import useGetUser from "../hooks/useGetUser";
import useGetCreatedEnsembles from "../hooks/useGetCreatedEnsembles";
import CreateEnsembleForm from "../components/CreateEnsembleForm";

function Profile() {
  const { user } = useGetUser();
  const { createdEnsembles, setCreatedEnsembles } = useGetCreatedEnsembles();

  const [errors, setErrors] = useState(undefined);
  const [visible, setVisible] = useState();
  const [createEnsembleData, setCreateEnsembleData] = useState();

  const userContext = useContext(AuthContext);

  const { access_token, loading } = userContext;

  const createEnsemble = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/ensemble/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(createEnsembleData),
      });

      const data = await response.json();

      //checking if we get an error and if so we set it in the local state so we can show it.
      if (data.error) return setErrors(data.message);
      if (data.statusCode === 400) return setErrors([data.message]);

      setCreatedEnsembles((prev) => [...prev, data]);
      setVisible(false);

      //setting the state to nothing so we clean everything that was in the state before
      setErrors();
      setCreateEnsembleData();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setCreateEnsembleData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const populate = () => {
    if (!createdEnsembles) return;

    return createdEnsembles.map((e, ix) => {
      return <Ensemble key={ix + "key"} ensemble={e} user={user} />;
    });
  };

  return (
    <ProfilePage>
      <ProfileTopDiv>
        <ProfileBox>
          <ProfileInformation>
            <Icon>icon</Icon>
            <User>
              <Name>{loading ? "Loading..." : user?.firstName}</Name>
              <Description>
                <p>info about the personsadsadad</p>
                <p>info about the person</p>
              </Description>
            </User>
          </ProfileInformation>
          <ButtonDiv>
            <ButtonCss text="Edit Profile" />
            <ButtonCss text="Options" />
          </ButtonDiv>
        </ProfileBox>

        <DAOS>
          <SidebarHeading>Er du medlem af DAOS?</SidebarHeading>
          <p>Er di medlem eller igennme et orkester ?</p>
          <PrimaryButton text="Jeg er Medlem" />
          <Button text="Bliv Medlem" />
        </DAOS>
      </ProfileTopDiv>

      <PageBreak />

      <GroupsDiv>
        <PrimaryButton
          onClick={() => setVisible(true)}
          text="create ensemble"
        />
        {visible && (
          <CreateEnsembleForm
            createEnsemble={createEnsemble}
            setVisible={setVisible}
            onChange={handleChange}
            errors={errors}
          />
        )}
        <CreatedGroups>
          <h2>Ensambles you have created</h2>
          <Groups>
            {" "}
            {!createdEnsembles || createdEnsembles.length <= 0
              ? "You have not created any Ensembles"
              : populate()}
          </Groups>
        </CreatedGroups>
      </GroupsDiv>
    </ProfilePage>
  );
}

export default Profile;

const Groups = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ButtonCss = styled(Button)`
  padding: 1rem 3rem;
  font-size: 1.5rem;
`;

const CreatedGroups = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const ProfilePage = styled.div`
  width: 75%;
  margin: 0 auto;
  min-height: 100vh;
  color: black;
`;

const ProfileTopDiv = styled.div`
  height: 45vh;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

const ProfileBox = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  height: 75%;
`;

const Icon = styled.div`
  height: 120px;
  width: 120px;
  margin-right: 2rem;
  border-radius: 20px;
  border: 5px solid white;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
  background: grey;
`;

const ProfileInformation = styled.div`
  display: flex;
  padding: 5rem 0;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const User = styled.div`
  height: 100%;
  font-family: "Montserrat";
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Name = styled.h2`
  margin-bottom: 2rem;
  font-family: "Oswald";
  font-size: 2.8rem;
  font-weight: 600;
  color: #bf1e2f;
`;

const Description = styled.div`
  margin-top: 1rem;
  line-height: 36px;
  color: #777777;
`;

const ButtonDiv = styled.div`
  width: 70%;
  display: flex;
`;

const DAOS = styled.div`
  width: 30%;
  border-radius: 10px;
  font-family: "Montserrat";
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 2rem;
  height: 100%;
  background: #f0f0f0;
`;

const SidebarHeading = styled.h3`
  color: #353a5d;
  font-family: "Oswald";
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;

const GroupsDiv = styled.div`
100%`;
