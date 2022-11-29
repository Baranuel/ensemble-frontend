import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Ensemble from "../components/Ensemble";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function Groups() {
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { access_token } = userContext;
  const [allEnsembles, setAllEnsembles] = useState("");
  const [ensemble, setEnsemble] = useState(0);
  const [user, setUser] = useState("");

  const handleSetEnsembles = async (ensemble) => {
    const updatedEnsemble = allEnsembles.map((ens) => {
      return ens._id === ensemble._id ? { ...ens, ensemble } : ens;
    });
    setAllEnsembles(updatedEnsemble);
  };

  useEffect(() => {
    fetch("http://localhost:3000/user/profile", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((data) => {
        if (data.status !== 200) return navigate("/login", { replace: true });
        return data.json();
      })
      .then((data) => {
        setUser(data.user);
      });
  }, []);

  useEffect(() => {
    getEnsembles();
  }, []);

  const getEnsembles = async () => {
    await fetch("http://localhost:3000/ensemble/getAll", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setAllEnsembles(data);
      })
      .finally(() => {});
  };

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
    if (!allEnsembles) return;
    return allEnsembles.map((e, ix) => {
      return (
        <Ensemble
          key={ix + "key"}
          createdByMe={isCreatedByMe(e, user)}
          ensemble={e}
          access_token={access_token}
          user={user}
          alreadyMember={alreadyMember(e, user)}
          setAllEnsembles={(e) => handleSetEnsembles(e)}
          getAllEnsembles={() => getEnsembles()}
        />
      );
    });
  };
  return (
    <GroupsPage>
      <Div>{populate()}</Div>
    </GroupsPage>
  );
}

export default Groups;

const GroupsPage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  color: black;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
