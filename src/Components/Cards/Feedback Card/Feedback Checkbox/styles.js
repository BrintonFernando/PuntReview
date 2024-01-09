import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.checked ? "green" : "rgba(243, 243, 243, 1)")};
  height: 16px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid rgba(215, 215, 215, 1);
  background-color: ${(props) => (props.checked ? "green" : "transparent")};

  &:hover {
    background-color: ${(props) =>
      props.checked ? "green" : "rgba(240, 240, 240, 1)"};
  }
`;

export const TickButton = styled.span`
  font-size: 10px;
  line-height: 1;
  color: rgba(255, 255, 255, 1);
`;

export const FeedbackLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FeedbackContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const Lists = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Content = styled.span`
  display: flex;
  width: 100%;
  padding-top: 1.5px;
  overflow-wrap: break-word;
  font-family: rubik;
  font-size: 13px;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  line-height: 15.41px;
`;

export const VoteCount = styled.span`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 12px;
  width: 30%;
  padding-top: 2px;
  font-family: rubik;
  font-size: 10px;
  font-weight: 400;
  color: rgba(67, 67, 67, 1);
  line-height: 11.85px;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  height: 10px;
  width: 100%;
`;

export const StyledProgressBar = styled(ProgressBar)`
  width: 210px;
  height: 10px;
  border-radius: 2px;
  background-color: rgba(240, 240, 240, 1);
  overflow: hidden;
`;

export const Percentage = styled.div`
  text-align: right;
  position: relative;
  font-family: rubik;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.85px;
  color: rgba(67, 67, 67, 1);
`;

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
  cursor: pointer;
  height: 36px;
  width: 36px;
`;
export const ProfileName = styled.div`
  cursor: pointer;
  width: max-content;
  font-family: rubik;
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
  font-family: rubik;
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
export const VotingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 20px 0 20px;
  position: relative;
`;
export const Question = styled.span`
  font-family: rubik;
  font-weight: 600;
  font-size: 16px;
  line-height: 18.96px;
  color: rgba(0, 0, 0, 1);
`;
export const FeedbackCardFooter = styled.div`
  display: flex;
  color: rgba(35, 35, 35, 1);
  font-family: rubik;
  font-size: 14px;
  font-weight: 500;
  gap: 5px;
  align-items: center;
`;

export const LikeIcon = styled.img`
  height: 20px;
  width: 20px;
`;
export const CommentIcon = styled.img`
  height: 20px;
  width: 20px;
`;
