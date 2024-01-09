import React from "react";
import styled from "styled-components";

const CustomiseButton = ({ content, icon, onClick, buttonStyles }) => (
  <StyledButton onClick={onClick} style={buttonStyles}>
    {icon && <CustomIcon src={icon} alt="icon" />}
    <Text>{content}</Text>
  </StyledButton>
);

const StyledButton = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 6px;
  padding: 10px 20px;
  margin: 10px;
  user-select: none;

  &:active {
    background: linear-gradient(
      to right,
      rgba(117, 17, 244, 0.4),
      rgba(189, 8, 218, 0.4)
    );
  }
`;

const CustomIcon = styled.img`
  width: 20.28px;
  height: 18px;
`;

const Text = styled.div`
  font-size: 14px;
  font-family: rubik;
  font-weight: 400;
  line-height: 19.74px;
`;

export default CustomiseButton;
