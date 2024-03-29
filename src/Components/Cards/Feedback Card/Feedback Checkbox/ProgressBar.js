import React from "react";

import { ProgressBarContainer, StyledProgressBar, Percentage } from "./styles";

function CustomProgressBar({ now, label }) {
  const getGradientBackground = (percentage) => {
    const colorStop = percentage + "%";
    return `linear-gradient(to right, rgba(158, 13, 230, 1) ${colorStop}, rgba(240, 240, 240, 1) ${colorStop})`;
  };

  const barBackground = getGradientBackground(now);

  return (
    <ProgressBarContainer>
      <StyledProgressBar
        now={now}
        visuallyHidden
        animated
        style={{ background: barBackground }}
      />
      <Percentage>{label}</Percentage>
    </ProgressBarContainer>
  );
}

export default CustomProgressBar;
