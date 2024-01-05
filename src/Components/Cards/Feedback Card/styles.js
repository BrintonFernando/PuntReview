import styled from "styled-components";

export const FeedbackCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 413px;
  border: 0 solid black;
  border-radius: 6px;
  color: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.3);
`;
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 20px 20px;
`;
export const Profile = styled.div`
  display: flex;
  width: 240px;
`;
export const ProfileImage = styled.img`
  height: 36px;
  width: 36px;
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
  gap: 5px;
  width: max-content;
  font-family: Rubik;
  font-size: 10px;
  font-weight: 400;
  color: rgba(98, 98, 98, 1);
  margin: 3px 5px;
`;
export const Dot = styled.img`
  align-items: center;
  height: 4px;
  width: 4px;
  color: rgba(180, 180, 180, 1);
`;
export const Question = styled.span`
  display: flex;
  position: relative;
  color: rgba(0, 0, 0, 1);
`;