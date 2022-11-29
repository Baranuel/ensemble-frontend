import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import PageBreak from "../components/PageBreak";
import PrimaryButton from "../components/PrimaryButton";
import { AuthContext } from "../context/AuthContextProvider";
import Ensemble from "../components/Ensemble";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(undefined);
  const [ensembles, setEnsembles] = useState(undefined);
  const [member, setMember] = useState(undefined);
  const [errors, setErrors] = useState(undefined);

  const [ensembleFromVisible, setEnsembleFormVisible] = useState();
  const [createEnsembleData, setCreateEnsembleData] = useState();

  const userContext = useContext(AuthContext);

  const { access_token, loading, setLoading } = userContext;
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/user/profile", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        if (data.status === 401) return navigate("/login");
        return data.json();
      })
      .then((data) => {
        setUser(data.user);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleCreateEnsemble = () => {
    setEnsembleFormVisible(true);
  };

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
      if (data.error) return setErrors(data.message);
      if (data.statusCode === 400) return setErrors([data.message]);
      setEnsembles((prev) => [...prev, data]);
      setEnsembleFormVisible(false);
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

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/ensemble/createdEnsembles", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setEnsembles(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setEnsembles]);

  useEffect(() => {
    fetch("http://localhost:3000/ensemble/userIsMember", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => setMember(data));
  }, []);

  const isCreatedByMe = (ensemble, currentUser) => {
    if (!ensemble) return;
    return ensemble.creator === currentUser._id;
  };

  const alreadyMember = (ensemble, currentUser) => {
    if (!ensemble) return;
    const member = ensemble.members.find(
      (member) => member === currentUser._id
    );

    return Boolean(member);
  };

  const populate = () => {
    if (!ensembles) return;

    return ensembles.map((e, ix) => {
      return (
        <Ensemble
          key={ix + "key"}
          createdByMe={isCreatedByMe(e, user)}
          ensemble={e}
          access_token={access_token}
          user={user}
          alreadyMember={alreadyMember(e, user)}
        />
      );
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
        <PrimaryButton onClick={handleCreateEnsemble} text="create ensemble" />
        {ensembleFromVisible && (
          <Form onSubmit={createEnsemble} method="POST">
            <Close>
              <h3 onClick={() => setEnsembleFormVisible(false)}>X</h3>
            </Close>
            <h2>Log in</h2>
            <label htmlFor="">Title</label>
            <br />
            <input name="title" onChange={handleChange} type="text" />
            <br />
            <label htmlFor="">Genre </label>
            <br />
            <input name="genre" onChange={handleChange} type="text" />
            <br />
            <label htmlFor="">Location </label>
            <br />
            <input name="location" onChange={handleChange} type="text" />
            <br />
            <label htmlFor="instruments">Instruments </label>
            <br />
            <input name="instruments" onChange={handleChange} type="text" />
            <br />

            {errors && (
              <Errors>
                {errors?.map((err, ix) => (
                  <p key={ix}>{err}</p>
                ))}
              </Errors>
            )}
            <ButtonCss text="Create" />
          </Form>
        )}
        <CreatedGroups>
          <h2>Ensambles you have created</h2>
          <Groups> {loading ? "loading..." : populate()}</Groups>
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
const CreatedGroups = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

const Errors = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: pink;
  border-radius: 10px;
  color: red;
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
const ButtonCss = styled(Button)`
  padding: 1rem 3rem;
  font-size: 1.5rem;
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

const Form = styled.form`
  width: 40%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  background: white;
  position: fixed;
  top: 5%;
  right: 30%;
  h2 {
    margin-bottom: 2rem;
  }
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;

  h3 {
    cursor: pointer;
  }
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
