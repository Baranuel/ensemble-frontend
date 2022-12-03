import React from "react";
import styled from "styled-components";

async function Groups() {
  // const { user } = useGetUser();
  // const { allEnsembles } = useGetCreatedEnsembles();
  // const test = useGetEnsembles();

  // const populate = () => {
  //   if (!allEnsembles) return;

  //   return allEnsembles.map((e, ix) => {
  //     return <Ensemble key={ix + "key"} ensemble={e} user={user} />;
  //   });
  // };
  return <GroupsPage></GroupsPage>;
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
