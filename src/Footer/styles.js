import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
`;

export const FooterContainerWithBkg = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  gap: 15px;
  height: 276px;
  box-shadow: 0 -6px 9px 0 rgba(25, 26, 60, 0.25);
  background-color: rgba(27, 28, 31, 1);
  padding: 16px;
`;

export const PuntReview = styled.img`
  width: 87px;
  height: 65.26px;
  margin: 16px 0 0 20px;
`;

export const Disclaimer = styled.div`
  display: flex;
  font-size: 12px;
  height: 40px;
  color: white;
  background-color: black;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 100px;
`;

export const CopyRight = styled.div`
  font-size: 12px;
`;

export const NavLink = styled.a`
  display: flex;
  gap: 4px;
  cursor: pointer;
  place-content: center;
  font-size: 14px;
  font-family: rubik;
  line-height: 16.59px;
  font-weight: 400;
  text-decoration: none;
  margin: 0 8px;
`;

export const Border = styled.span`
  cursor: default;
  width: 12px;
  border-right: 1px solid rgba(53, 53, 53, 1);
`;

export const NavButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  font-family: rubik;
  font-size: 14px;
  line-height: 16.59px;
  font-weight: 400;
  text-decoration: none;
  padding: 10px;

  span {
    color: rgba(255, 255, 255, 1);
  }
`;

export const MailID = styled.span`
  display: flex;
  align-items: center;
  color: rgba(53, 53, 53, 1);
  margin: 20px 0 0 15px;
  gap: 10px;

  img {
    width: 20px;
    height: 20px;
    color: white;
  }
  span {
    color: rgba(255, 255, 255, 1);
  }
`;

export const Logo = styled.img`
  display: inline-block;
  height: 24px;
  width: 24px;
  color: rgba(255, 255, 255, 1);
  margin: 20px 0 0 14px;
`;
