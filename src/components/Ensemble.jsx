import React, { useContext, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import { AuthContext } from "../context/AuthContextProvider";

function Ensemble(props) {
  const {
    ensemble,
    createdByMe,
    access_token,
    user,
    alreadyMember,
    setAllEnsembles,
    ens,
    getAllEnsembles,
  } = props;

  const [loading, setLoading] = useState(false);

  const handleJoinEnsemble = async () => {
    setLoading(true);
    await fetch("http://localhost:3000/ensemble/addMember", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ensembleId: ensemble._id, userId: user._id }),
    });
    await getAllEnsembles();
    setLoading(false);
  };

  return (
    <EnsembleCard>
      <Heading>{ensemble.title}</Heading>
      <p>
        <strong>genre:</strong> {ensemble.genre}
      </p>
      <p>
        <strong>location:</strong> {ensemble.location}
      </p>
      <p>
        <strong>creator:</strong>{" "}
        {ensemble.creator === user?._id ? "you" : ensemble.creator}
      </p>
      <ul>
        <strong>members:</strong>{" "}
        {ensemble.members.map((member, ix) => (
          <li style={{ listStyleType: "none" }} key={ix}>
            {member}
          </li>
        ))}
      </ul>
      {!createdByMe && !alreadyMember && (
        <PrimaryButton
          loading={loading}
          text="Register to group"
          onClick={handleJoinEnsemble}
        />
      )}
    </EnsembleCard>
  );
}

export default Ensemble;

const EnsembleCard = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 0;
  width: 450px;
  min-height: 250px;
  border-radius: 10px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
`;

const Heading = styled.h3`
  font-size: 2.1rem;
  margin-bottom: 0.5rem;
`;
