import React, { useState } from "react";
import FeedbackCheckBoxLists from "./FeedbackCheckboxLists";

const FeedbackCheckBoxContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <FeedbackCheckBoxLists
      isChecked={isChecked}
      onCheckboxChange={() => setIsChecked(!isChecked)}
    />
  );
};

export default FeedbackCheckBoxContent;
