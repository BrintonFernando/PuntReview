import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import styled from "styled-components";

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

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 10px;
  width: 100%;
`;

const StyledProgressBar = styled(ProgressBar)`
  width: 210px;
  height: 10px;
  border-radius: 2px;
  background-color: rgba(240, 240, 240, 1);
  overflow: hidden;
`;

const Percentage = styled.div`
  text-align: right;
  position: relative;
  font-family: rubik;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.85px;
  color: rgba(67, 67, 67, 1);
`;
