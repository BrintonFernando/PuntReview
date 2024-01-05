import React, { useState } from "react";
import CheckBoxLists from "./CheckBoxLists";

const CheckBoxContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckBoxLists
      isChecked={isChecked}
      onCheckboxChange={handleCheckboxChange}
    />
  );
};

export default CheckBoxContent;
