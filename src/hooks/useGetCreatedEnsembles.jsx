import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

function useGetCreatedEnsembles() {
  const userContext = useContext(AuthContext);
  const { access_token } = userContext;
  const [createdEnsembles, setCreatedEnsembles] = useState();
  useEffect(() => {
    fetch("http://localhost:3000/ensemble/createdEnsembles", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setCreatedEnsembles(data);
      });
  }, [setCreatedEnsembles]);

  return { createdEnsembles, setCreatedEnsembles };
}

export default useGetCreatedEnsembles;
