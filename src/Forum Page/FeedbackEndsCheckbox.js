import React, { useState } from "react";
import { Input, TickButton } from "./styles";

const FeedbackEndsCheckbox = ({ isChecked, onChange }) => {
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

export default FeedbackEndsCheckbox;
