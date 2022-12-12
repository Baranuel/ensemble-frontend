import React from "react";
import styled from "styled-components";

const CreatorLabelCard = styled.div`
  margin: 0.25rem;
  padding: 0.25rem;
  min-height: 120px;
  border: 1px solid #ebeaea;
  border-radius: 5px;
  flex-basis: 100%;
  background: white;
  display: flex;
  align-items: center;
`;

const CreatorLabelImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
`;

const CreatorLabelInfo = styled.div`
  margin-left: 16px;
`;

const CreatorLabelName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const CreatorLabelContact = styled.p`
  font-size: 14px;
  margin: 0;
`;

const CreatorLabel = ({ image, email, phone, name }) => (
  <CreatorLabelCard>
    <CreatorLabelImage src={image} alt={name} />
    <CreatorLabelInfo>
      <CreatorLabelName>{name}</CreatorLabelName>
      <CreatorLabelContact>{email}</CreatorLabelContact>
      <CreatorLabelContact>{phone}</CreatorLabelContact>
    </CreatorLabelInfo>
  </CreatorLabelCard>
);

export default CreatorLabel;
