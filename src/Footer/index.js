import React from "react";
import {
  FooterContainer,
  FooterContainerWithBkg,
  PuntReview,
  Disclaimer,
  NavLink,
  Border,
  NavButton,
  CopyRight,
  NavLists,
  MailID,
  Logo,
} from "./styles";
import BackToTop from "../Components/Buttons/GoUpButton";
import logo from "../images/PuntReview.svg";
import email from "../images/Email.svg";
import facebook from "../images/facebook.png";
import linkedin from "../images/Linkedin.png";
import instagram from "../images/Instagram.png";

const socialMediaIcons = [
  { icon: facebook, alt: "Facebook" },
  { icon: linkedin, alt: "Linkedin" },
  { icon: instagram, alt: "Instagram" },
  { icon: instagram, alt: "Instagram" },
  { icon: instagram, alt: "Instagram" },
];

const footerLists = [
  ["Online Casinos", "Bonuses", "Gambling Guides", "Forum", "User Reviews"],
  ["About Us", "Contact us", "Licenses", "Casino Regulations"],
];

const ratings = ["Sitemap", "Robot.txt", "Disclaimer"].map((name) => ({
  name: name || `/${name.toUpperCase().split(" ").join("-")}`,
}));

const Footer = () => {
  return (
    <FooterContainer>
      <BackToTop />
      <FooterContainerWithBkg>
        <PuntReview src={logo} alt="Logo" />
        {footerLists.map((list, i) => (
          <NavLists key={i}>
            {list.map((item) => (
              <NavLists key={item}>
                <span>{item}</span>
              </NavLists>
            ))}
          </NavLists>
        ))}
        <div>
          <MailID key="mail">
            <img src={email} alt="Mail Id" />
            <span>info@puntreview.in</span>
          </MailID>
          {socialMediaIcons.map(({ icon, alt }, i) => (
            <Logo key={i} src={icon} alt={alt} />
          ))}
        </div>
      </FooterContainerWithBkg>
      <Disclaimer>
        <CopyRight>©️ Punt Review 2023</CopyRight>
        <NavButton>
          {ratings.map(({ name }, i) => (
            <React.Fragment key={i}>
              <NavLink>
                <span>{name}</span>
                {i !== ratings.length - 1 && <Border>{}</Border>}
              </NavLink>
            </React.Fragment>
          ))}
        </NavButton>
      </Disclaimer>
    </FooterContainer>
  );
};

export default Footer;
