import React, { useState } from "react";
import exploreTopicsCheckboxLists from "./exploreTopicsCheckBoxLists";

const CheckBoxContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <exploreTopicsCheckboxLists
      isChecked={isChecked}
      onCheckboxChange={() => setIsChecked(!isChecked)}
    />
  );
};

export default CheckBoxContent;
