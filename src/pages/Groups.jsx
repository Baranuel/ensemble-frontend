import React from "react";
import useGetEnsembles from "../hooks/useGetEnsembles";
import useGetUser from "../hooks/useGetUser";
import useGetCreatedEnsembles from "../hooks/useGetCreatedEnsembles";
import Ensemble from "../components/Ensemble";
import useGetAllEnsembles from "../hooks/useGetAllEnsembles";
import styled from "styled-components";

async function Groups() {
  const { user } = useGetUser();
  const { allEnsembles } = useGetAllEnsembles();

  const populate = () => {
    if (!allEnsembles) return;

    return allEnsembles.map((e, ix) => {
      return <Ensemble key={ix + "key"} ensemble={e} user={user} />;
    });
  };
  return <GroupsPage>{populate()}</GroupsPage>;
}

export default Groups;

const GroupsPage = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
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
