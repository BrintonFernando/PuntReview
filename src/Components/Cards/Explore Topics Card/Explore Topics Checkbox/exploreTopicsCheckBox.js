import React from "react";
import { Input } from "./styles";

const ExploreTopicsCheckbox = ({ isChecked, onChange }) => (
  <Input type="checkbox" checked={isChecked} onChange={onChange} />
);

export default ExploreTopicsCheckbox;
