import React from "react";
import useGetEnsembles from "../hooks/useGetEnsembles";
import useGetUser from "../hooks/useGetUser";
import Ensemble from "../components/Ensemble";

function Groupsv2() {
  const { allEnsembles } = useGetEnsembles();
  const { user } = useGetUser();
  console.log(allEnsembles);
  const populate = () => {
    if (!allEnsembles) return;

    return allEnsembles.map((e, ix) => {
      return <Ensemble key={ix + "key"} ensemble={e} user={user} />;
    });
  };

  return <div>{populate()}</div>;
}

export default Groupsv2;
