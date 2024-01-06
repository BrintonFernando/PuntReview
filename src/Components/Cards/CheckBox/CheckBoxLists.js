import React from "react";
import styled from "styled-components";
import Checkbox from "./checkBox";

const titles = [
  "General Gambling Discussion",
  "Complaints and Discussions",
  "Responsible Gambling",
  "Competitions",
  "General Gambling Discussion",
  "Complaints and Discussions",
  "Responsible Gambling",
  "Competitions",
  "General Gambling Discussion",
  "Complaints and Discussions",
];

const CheckBoxLists = ({ onCheckboxChange }) => {
  return (
    <div>
      {titles.map((title, index) => (
        <CardElement key={index}>
          <Checkbox onChange={() => onCheckboxChange(index)} />
          <Content>{title}</Content>
        </CardElement>
      ))}
    </div>
  );
};

export default CheckBoxLists;

const CardElement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  height: 20px;
  margin: 17px;
`;

const Content = styled.h3`
  width: max-content;
  font-family: rubik;
  font-size: 14px;
  font-weight: 400;
  color: black;
`;
