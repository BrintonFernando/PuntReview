import React, { useState } from "react";
import CheckBoxLists from "./CheckBoxLists";

const CheckBoxContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckBoxLists
      isChecked={isChecked}
      onCheckboxChange={() => setIsChecked(!isChecked)}
    />
  );
};

export default CheckBoxContent;
