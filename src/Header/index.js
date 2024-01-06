import React from "react";
import {
  HeaderContainerGrid,
  HeaderContainerContent,
  HeaderTopLeft,
  Logo,
  Border,
  NavLinkWrapper,
  NavLink,
  Themes,
  BrightnessLogo,
  ThemeLogo,
  Language,
  Text,
  Arrow,
  HeaderTopRight,
  ProfileImage,
} from "./styles";
import logo from "../images/Punt Review Logo.svg";
import brightness from "../images/Light Theme Logo.svg";
import theme from "../images/Dark Theme Logo.svg";
import NotificationBell from "../Components/Notification/NotificationBell";
import profile from "../images/Mask group.svg";
import { HEADINGS } from "./constants";

function Header({ headings = HEADINGS }) {
  const isCurrentPath = (url) => window.location.pathname === url;

  return (
    <HeaderContainerGrid>
      <HeaderContainerContent>
        <HeaderTopLeft>
          <Logo src={logo} alt="Logo" />
          <Border />
          <NavLinkWrapper>
            {headings.map(({ url, name }, index) => (
              <NavLink key={index} href={url} active={isCurrentPath(url)}>
                {name}
              </NavLink>
            ))}
          </NavLinkWrapper>
        </HeaderTopLeft>
        <HeaderTopRight>
          <Themes>
            <BrightnessLogo src={brightness} alt="brightness" />
            <ThemeLogo src={theme} alt="theme" />
          </Themes>
          <Language>
            <Text>ENG</Text>
            <Arrow>&#9660;</Arrow>
          </Language>
          <NotificationBell />
          <ProfileImage src={profile} alt="profile" />
        </HeaderTopRight>
      </HeaderContainerContent>
    </HeaderContainerGrid>
  );
}

export default Header;
