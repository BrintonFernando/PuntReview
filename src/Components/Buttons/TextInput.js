import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.input`
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  word-wrap: break-word;
  border: none;
  outline: none;
  padding: ${({ padding }) => (padding ? `${padding}` : "8px")};
  font-family: rubik;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "16px")};
  font-weight: 400;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}` : "0")};
`;

const TextInputComponent = ({
  placeholder,
  width,
  marginLeft,
  padding,
  fontSize,
  ...props
}) => (
  <StyledTextInput
    type="text"
    id="exampleInput"
    placeholder={placeholder || "What’s on your mind?"}
    width={width}
    marginLeft={marginLeft}
    padding={padding}
    fontSize={fontSize}
    {...props}
  />
);

export default TextInputComponent;
