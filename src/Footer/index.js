import React from "react";
import {
  FooterContainer,
  FooterContainerWithBkg,
  Logo,
  Disclaimer,
  NavLink,
  Border,
  NavButton,
  CopyRight,
  NavLists,
} from "./styles";
import BackToTop from "../Components/Buttons/GoUpButton";
import logo from "../images/PuntReview.svg";

const Footer = () => {
  const _name = ["Sitemap", "Robot.txt", "Disclaimer"];

  const RATINGS = _name.map((name) => ({
    name: name || `/${name.toUpperCase().split(" ").join("-")}`,
  }));

  return (
    <>
      <FooterContainer>
        <BackToTop />
        <FooterContainerWithBkg>
          <Logo src={logo} alt="Logo" />
          <NavLists>
            <span>Online Casinos</span>
            <span>Bonuses</span>
            <span>Gambling Guides</span>
            <span>Forum</span>
            <span>User Reviews</span>
          </NavLists>
        </FooterContainerWithBkg>
        <Disclaimer>
          <CopyRight>©️ Punt Review 2023</CopyRight>
          <NavButton>
            {RATINGS.map(({ name }, index) => (
              <React.Fragment key={index}>
                <NavLink>
                  <span>{name}</span>
                  {index !== RATINGS.length - 1 && <Border>{}</Border>}
                </NavLink>
              </React.Fragment>
            ))}
          </NavButton>
        </Disclaimer>
      </FooterContainer>
    </>
  );
};

export default Footer;
