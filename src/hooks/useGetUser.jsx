import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

function useGetUser() {
  const navigate = useNavigate();
  const userContext = useContext(AuthContext);
  const { access_token } = userContext;

  const [user, setUser] = useState();

  useEffect(() => {
    try {
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
          console.log(data);
          setUser(data.user);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return { user, access_token };
}

export default useGetUser;
