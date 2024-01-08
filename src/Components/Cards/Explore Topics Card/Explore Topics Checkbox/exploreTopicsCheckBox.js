import React from "react";
import styled from "styled-components";

const exploreTopicsCheckbox = ({ isChecked, onChange }) => (
  <Input type="checkbox" checked={isChecked} onChange={onChange} />
);

export default exploreTopicsCheckbox;

const Input = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  border: 1px solid rgba(215, 215, 215, 1);
`;
