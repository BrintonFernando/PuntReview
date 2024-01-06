import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }) => (
  <BreadcrumbsTab>
    {paths.map((path, index) => (
      <React.Fragment key={index}>
        <StyledLink to={path.link}>{path.label}</StyledLink>
        {index < paths.length - 1 && <span> &gt; </span>}
      </React.Fragment>
    ))}
  </BreadcrumbsTab>
);

export default Breadcrumbs;

const BreadcrumbsTab = styled.h6`
  display: inline-block;
  height: 7px;
  font-size: 10px;
  font-family: rubik;
  line-height: 11.85px;
  font-weight: 400;
  margin: 28px 0px 20px 0px;
  color: rgba(103, 103, 103, 1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
