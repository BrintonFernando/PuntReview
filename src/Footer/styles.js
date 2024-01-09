import { styled, css } from "styled-components";
import backgroundImage from "../images/BackgroundImage.jpg";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
`;

export const FooterContainerWithBkg = styled.div`
  display: grid;
  grid-template-columns: 276px 276px 276px 276px 1fr;
  height: 276px;
  /* align-items: center; */
  justify-content: center;
  /* background-image: url(${backgroundImage}); */
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  box-shadow: 0 -6px 9px 0 rgba(25, 26, 60, 0.25);
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Logo = styled.img`
  width: 87px;
  height: 65.26px;
  background-color: black;
  margin-left: 100px;
  margin-top: 50px;
`;

export const Disclaimer = styled.div`
  display: flex;
  font-size: 12px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px 0 100px;
`;

export const CopyRight = styled.div`
  width: 120px;
  height: 14px;
  font-size: 12px;
  line-height: 14.22px;
`;
export const NavLink = styled.a`
  display: flex;
  gap: 4px;
  cursor: pointer;
  place-content: center;
  font-size: 14px;
  font-family: rubik;
  color: black;
  line-height: 16.59px;
  font-weight: 400;
  text-decoration: none;
  margin: 0 8px;
`;
export const Border = styled.span`
  align-items: center;
  cursor: default;
  width: 12px;
  border-right: 1px solid rgba(53, 53, 53, 1);
`;
export const NavButton = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NavLists = styled`
width: max-content;
display: flex;
flex-direction: row;
font-family: rubik;
font-size: 14px;
color: rgba(255, 255, 255, 1);
line-height: 16.59px;
font-weight: 400;
text-decoration: none;
margin: 0 8px;
`;
