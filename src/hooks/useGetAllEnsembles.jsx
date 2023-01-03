import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../context/AuthContextProvider";

function useGetAllEnsembles() {
  const { access_token } = useContext(AuthContext);
  const [allEnsembles, setAllEnsembles] = useState();
  const [loading, setLoading] = useState();

  const isLoading = loading;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    await fetch("http://localhost:3000/ensemble/getAll", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllEnsembles(data);
      });
    setLoading(false);
  };

  const refetchData = async () => {
    await fetch("http://localhost:3000/ensemble/getAll", {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllEnsembles(data);
      });
  };

  //basically we are doing all
  return { allEnsembles, setAllEnsembles, refetchData, isLoading };
}

export default useGetAllEnsembles;
