import React from "react";
import {
  FeedbackLists,
  FeedbackContent,
  Lists,
  Content,
  VoteCount,
} from "./styles";
import FeedbackCheckbox from "./FeedbackCheckbox";
import CustomProgressBar from "./ProgressBar";

const titles = [
  "Strategy and skill",
  "Social interaction",
  "Winning money",
  "Entertainment and relaxation",
];

const FeedbackCheckBoxLists = ({ onCheckboxChange }) => {
  return (
    <FeedbackLists>
      <div>
        <FeedbackContent>
          <Lists>
            <FeedbackCheckbox onChange={() => onCheckboxChange(0)} />
            <Content>{titles[0]}</Content>
            <VoteCount> 3 votes</VoteCount>
          </Lists>
          <CustomProgressBar now={20} label="20%" />
        </FeedbackContent>
      </div>
      <div>
        <FeedbackContent>
          <Lists>
            <FeedbackCheckbox onChange={() => onCheckboxChange(1)} />
            <Content>{titles[1]}</Content>
            <VoteCount> 3 votes</VoteCount>
          </Lists>
          <CustomProgressBar now={20} label="20%" />
        </FeedbackContent>
      </div>
      <div>
        <FeedbackContent>
          <Lists>
            <FeedbackCheckbox onChange={() => onCheckboxChange(2)} />
            <Content>{titles[2]}</Content>
            <VoteCount> 3 votes</VoteCount>
          </Lists>
          <CustomProgressBar now={90} label="90%" />
        </FeedbackContent>
      </div>
      <div>
        <FeedbackContent>
          <Lists>
            <FeedbackCheckbox onChange={() => onCheckboxChange(3)} />
            <Content>{titles[3]}</Content>
            <VoteCount> 3 votes</VoteCount>
          </Lists>
          <CustomProgressBar now={20} label="20%" />
        </FeedbackContent>
      </div>
    </FeedbackLists>
  );
};

export default FeedbackCheckBoxLists;
