import React, { useState } from "react";
import TopicsCheckboxLists from "./exploreTopicsCheckBoxLists";

const CheckBoxContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TopicsCheckboxLists
      isChecked={isChecked}
      onCheckboxChange={() => setIsChecked(!isChecked)}
    />
  );
};

export default CheckBoxContent;
