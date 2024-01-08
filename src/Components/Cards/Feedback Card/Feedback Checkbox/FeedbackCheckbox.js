import React, { useState } from "react";
import styled from "styled-components";

const FeedbackCheckbox = ({ isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange && onChange();
  };

  return (
    <Input checked={checked} onClick={handleCheckboxChange}>
      {checked && <TickButton>&#10003;</TickButton>}
    </Input>
  );
};

export default FeedbackCheckbox;

const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.checked ? "green" : "rgba(243, 243, 243, 1)")};
  height: 16px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid rgba(215, 215, 215, 1);
  background-color: ${(props) => (props.checked ? "green" : "transparent")};

  &:hover {
    background-color: ${(props) =>
      props.checked ? "green" : "rgba(240, 240, 240, 1)"};
  }
`;

const TickButton = styled.span`
  font-size: 10px;
  line-height: 1;
  color: rgba(255, 255, 255, 1);
`;
