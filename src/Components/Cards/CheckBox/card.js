import React from "react";
import styled from "styled-components";
import Checkbox from "./checkBox";

const Card = ({ title, description, isChecked, onCheckboxChange }) => {
  return (
    <CardElement>
      <Checkbox isChecked={isChecked} onChange={onCheckboxChange} />
      <h3>{title}</h3>
      <p>{description}</p>
    </CardElement>
  );
};

export default Card;

const CardElement = styled.div`
  margin: 0;
  width: 20px;
`;
