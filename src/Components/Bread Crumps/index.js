import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }) => (
  <BreadcrumbsTab>
    {paths.map(({ link, label }, index) => (
      <React.Fragment key={index}>
        <StyledLink to={link}>{label}</StyledLink>
        {index < paths.length - 1 && <Separator> &gt; </Separator>}
      </React.Fragment>
    ))}
  </BreadcrumbsTab>
);

const BreadcrumbsTab = styled.h6`
  display: inline-block;
  height: 7px;
  font-size: 10px;
  font-family: rubik;
  line-height: 11.85px;
  font-weight: 400;
  margin: 28px 0 20px 0;
  color: rgba(103, 103, 103, 1);
`;

const Separator = styled.span`
  margin: 0 5px;
  color: rgba(103, 103, 103, 1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default Breadcrumbs;
