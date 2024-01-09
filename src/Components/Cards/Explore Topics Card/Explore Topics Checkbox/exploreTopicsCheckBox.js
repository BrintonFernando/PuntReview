import React from "react";
import { Input } from "./styles";

const exploreTopicsCheckbox = ({ isChecked, onChange }) => (
  <Input type="checkbox" checked={isChecked} onChange={onChange} />
);

export default exploreTopicsCheckbox;
