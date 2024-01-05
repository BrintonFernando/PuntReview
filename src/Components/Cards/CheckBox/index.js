import React, { useState } from "react";
import Card from "./card";

const ExploreTopicItems = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Card
        title="General Gambling Discussion"
        // description="Your gambling discussion content goes here."
        isChecked={isChecked}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default ExploreTopicItems;
