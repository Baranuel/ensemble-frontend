import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

async function useGetEnsembles() {
  const userContext = useContext(AuthContext);
  const { access_token } = userContext;

  const [allEnsembles, setAllEnsembles] = useState([]);
  console.log(allEnsembles);
  useEffect(() => {
    fetch("http://localhost:3000/ensemble/getAll", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllEnsembles(data);
      });
  }, []);

  return { allEnsembles };
}

export default useGetEnsembles;
