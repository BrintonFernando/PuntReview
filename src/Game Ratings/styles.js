import { styled, css } from "styled-components";

export const GameListRating = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid;
  background: linear-gradient(to right, #7511f4, #bd08da);
`;
export const RatingList = styled.div`
  display: grid;
  grid-template-columns: 20px 101px 157px 137px 107px 147px 101px 157px;
  gap: 42px;
  align-items: center;
  justify-items: center;
  padding: 0 0 0 50px;
`;
export const GameLogo = styled.img`
  width: 20px;
  height: 20px;
`;
export const NavLink = styled.a`
  cursor: pointer;
  place-content: center;
  width: max-content;
  font-size: 14px;
  font-family: Rubik;
  color: white;
  line-height: 16.59px;
  font-weight: 400;
  text-decoration: none;
`;
export const Border = styled.span`
  cursor: default;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 10px 0 13px;
`;
