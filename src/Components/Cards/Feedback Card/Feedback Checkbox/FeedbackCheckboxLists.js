import React from "react";
import styled from "styled-components";
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
      {titles.map((title, index) => (
        <div key={index}>
          <FeedbackContent>
            <Lists>
              <FeedbackCheckbox onChange={() => onCheckboxChange(index)} />
              <Content>{title}</Content>
              <VoteCount> 3 votes</VoteCount>
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

export default FeedbackCheckBoxLists;

const FeedbackLists = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
`;

const FeedbackContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 36px;
  gap: 8px;
`;

const Lists = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

const Content = styled.span`
  display: flex;
  width: 100%;
  padding-top: 1.5px;
  overflow-wrap: break-word;
  font-family: rubik;
  font-size: 13px;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  line-height: 15.41px;
`;

const VoteCount = styled.span`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 12px;
  width: 30%;
  padding-top: 2px;
  font-family: rubik;
  font-size: 10px;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  line-height: 11.85px;
`;
