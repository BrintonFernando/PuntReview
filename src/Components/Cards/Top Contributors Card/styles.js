import styled from "styled-components";

export const TopContributors = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 357px;
  border: 0 solid black;
  border-radius: 6px;
  color: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.3);
`;
export const Header = styled.h3`
  width: max-content;
  color: rgba(92, 92, 92, 1);
  font-family: Rubik;
  font-size: 12px;
  font-weight: 600;
  margin: 20px 20px 0 20px;
`;
export const ProfileLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 20px 0 20px;
`;
export const Profile = styled.div`
  display: flex;
  height: 58px;
  border-bottom: 1px solid rgba(227, 227, 227, 1);
  width: 240px;

  &:last-child {
    border-bottom: none;
  }
`;
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
`;
export const ProfileName = styled.div`
  width: max-content;
  font-family: Rubik;
  font-size: 15px;
  font-weight: 500;
  color: rgba(17, 17, 17, 1);
  margin: 0 5px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: max-content;
  font-family: Rubik;
  font-size: 12px;
  font-weight: 400;
  color: rgba(98, 98, 98, 1);
  margin: 5px 5px;
`;
export const Dot = styled.img`
  align-items: center;
  height: 6px;
  width: 6px;
  color: rgba(180, 180, 180, 1);
`;
