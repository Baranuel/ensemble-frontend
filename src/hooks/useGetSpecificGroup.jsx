import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

function useGetSpecificGroup(_id) {
  const { access_token } = useContext(AuthContext);
  const [specificEnsemble, setSpecificEnsemble] = useState();
  console.log(specificEnsemble);
  useEffect(() => {
    GetSpecificEnsemble();
  }, []);

  const GetSpecificEnsemble = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/ensemble/getOne/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setSpecificEnsemble(data);
    } catch (err) {
      console.log(err);
    }
  };
  return { specificEnsemble };
}

export default useGetSpecificGroup;
