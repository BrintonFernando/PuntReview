import React from "react";
import {
  FeedbackLists,
  FeedbackContent,
  Lists,
  Content,
  // VoteCount,
} from "./styles";
import FeedbackEndsCheckbox from "./FeedbackEndsCheckbox";
import CustomProgressBar from "./ProgressBarWithoutColor";

const titles = [
  "Strategy and skill",
  "Social interaction",
  "Winning money",
  "Entertainment and relaxation",
];

const FeedbackEndsCheckBoxLists = ({ onCheckboxChange }) => {
  return (
    <FeedbackLists>
      {titles.map((title, index) => (
        <div key={index}>
          <FeedbackContent>
            <Lists>
              <FeedbackEndsCheckbox onChange={() => onCheckboxChange(index)} />
              <Content>{title}</Content>
              {/* <VoteCount> 3 votes</VoteCount> */}
            </Lists>
            {index === 2 ? (
              <CustomProgressBar now={90} label="90%" />
            ) : (
              <CustomProgressBar now={20} label="20%" />
            )}
          </FeedbackContent>
        </div>
      ))}
    </FeedbackLists>
  );
};

export default FeedbackEndsCheckBoxLists;
