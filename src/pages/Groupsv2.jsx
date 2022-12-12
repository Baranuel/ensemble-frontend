import React from "react";
import useGetEnsembles from "../hooks/useGetEnsembles";
import useGetUser from "../hooks/useGetUser";
import useGetCreatedEnsembles from "../hooks/useGetCreatedEnsembles";
import Ensemble from "../components/Ensemble";
import useGetAllEnsembles from "../hooks/useGetAllEnsembles";
import styled from "styled-components";
import Spinner from "../components/Spinner";

function Groupsv2() {
  // console.log(useGetEnsembles());
  // const { allEnsembles } = useGetEnsembles();

  const { user } = useGetUser();
  const { allEnsembles, refetchData, setAllEnsembles, isLoading } =
    useGetAllEnsembles();
  const populate = () => {
    if (!allEnsembles) return;

    return allEnsembles.map((e, ix) => {
      return (
        <Ensemble
          key={ix + "key"}
          ensemble={e}
          user={user}
          refetch={refetchData}
          setAllEnsembles={setAllEnsembles}
        />
      );
    });
  };

  return (
    <GroupsPage>
      <Div>{isLoading ? <SpinnerCss className /> : populate()}</Div>
    </GroupsPage>
  );
}

export default Groupsv2;

const GroupsPage = styled.div`
  display: flex;
  position: relative;
  padding: 2rem;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  color: black;
`;

const SpinnerCss = styled(Spinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
`;
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
