import React from "react";
import styled from "styled-components";
import Checkbox from "./checkBox";

const CheckBoxLists = ({ onCheckboxChange }) => {
  const titles = [
    { title: "General Gambling Discussion" },
    { title: "Compliants and Discussions" },
    { title: "Responsible Gambling" },
    { title: "Competitions" },
    { title: "General Gambling Discussion" },
    { title: "Compliants and Discussions" },
    { title: "Responsible Gambling" },
    { title: "Competitions" },
    { title: "General Gambling Discussion" },
    { title: "Compliants and Discussions" },
  ];

  return (
    <div>
      {titles.map((item, index) => (
        <CardElement key={index}>
          <Checkbox onChange={() => onCheckboxChange(index)} />
          <Content>{item.title}</Content>
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
  font-family: Rubik;
  font-size: 14px;
  font-weight: 400;
  color: black;
`;
