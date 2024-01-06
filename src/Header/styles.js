import { styled, css } from "styled-components";

export const HeaderContainerGrid = styled.header`
  display: grid;
  height: 50px;
  margin: 0 50px;
  padding: 10px 0;
  align-items: center;
  align-content: center;
`;

export const HeaderContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderTopLeft = styled.header`
  max-width: auto;
  display: grid;
  grid-template-columns: 57.31px 60px 1fr;
  align-content: center;
`;

export const Logo = styled.img`
  cursor: pointer;
`;

export const Border = styled.span`
  height: 30px;
  border-left: 1px solid grey;
  margin: 5px 30px 5px 30px;
`;

export const NavLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  gap: 22px;
  padding-top: 10px;
  height: 45px;
`;

export const NavLink = styled.a`
  align-items: center;
  height: 17px;
  max-width: max-content;
  text-align: center;
  font-size: 14px;
  font-family: rubik;
  color: grey;
  line-height: 16.59px;
  font-weight: 400;
  text-decoration: none;

  ${(props) =>
    props.active &&
    css`
      text-align: center;
      padding-bottom: 20px;
      font-weight: 700;
      border-bottom: 1px solid #1143f4;
      color: #1143f4;
    `};
`;

export const Themes = styled.div`
  display: grid;
  grid-template-columns: 45px 45px;
  align-items: center;
  justify-items: center;
  height: 40px;
  border: 0.5px solid;
  overflow: hidden;
  border-radius: 100px;
  box-sizing: border-box;
  border-image-slice: 1;
  color: linear-gradient(to right, #7511f4, #bd08da);
`;

export const BrightnessLogo = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
`;

export const ThemeLogo = styled.img`
  cursor: pointer;
  height: 18px;
  width: 18px;
`;

export const Language = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 28px 5px;
  gap: 5px;
  align-content: center;
  align-items: center;
  height: 40px;
`;

export const Text = styled.h1`
  font-size: 14px;
  font-weight: 400;
  font-family: rubik;
`;

export const Arrow = styled.h1`
  font-size: 5px;
  font-weight: 400;
  font-family: rubik;
`;

export const HeaderTopRight = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: space-evenly;
  height: 40px;
`;

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
