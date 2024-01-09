import React from "react";
import { CardElement, Content } from "./styles";
import TopicsCheckbox from "./exploreTopicsCheckBox";

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

const exploreTopicsCheckBoxLists = ({ onCheckboxChange }) => {
  return (
    <div>
      {titles.map((title, index) => (
        <CardElement key={index}>
          <TopicsCheckbox onChange={() => onCheckboxChange(index)} />
          <Content>{title}</Content>
        </CardElement>
      ))}
    </div>
  );
};

export default exploreTopicsCheckBoxLists;
