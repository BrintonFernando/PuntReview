import React from "react";
import styled from "styled-components";

const IconWithNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  background-color: linear-gradient(
    to right,
    rgba(117, 17, 244, 1),
    rgba(189, 8, 218, 1)
  );
`;

const Name = styled.div`
  align-items: center;
  font-family: rubik;
  font-size: 12px;
  height: 14px;
  color: linear-gradient(to right, rgba(117, 17, 244, 1), rgba(189, 8, 218, 1));
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: rgba(210, 210, 210, 1);
  border-radius: 50%;
  margin-left: 15px;
`;

const IconWithName = ({
  iconSrc,
  name,
  iconBackground,
  nameColor,
  isLastChild,
}) => (
  <IconWithNameContainer>
    <Icon src={iconSrc} alt="icon" background={iconBackground} />
    <Name color={nameColor}>{name}</Name>
    {isLastChild ? null : <Dot />}
  </IconWithNameContainer>
);

export default IconWithName;
