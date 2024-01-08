import React from "react";
import styled from "styled-components";

const FeedbackCheckbox = ({ isChecked, onChange }) => (
  <Input type="checkbox" checked={isChecked} onChange={onChange} />
);

export default FeedbackCheckbox;

const Input = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px solid rgba(215, 215, 215, 1);
`;
