import styled from "styled-components";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.checked ? "green" : "rgba(243, 243, 243, 1)")};
  height: 16px;
  width: 18px;
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

export const ForumPage = styled.div`
  margin: 0 50px 100px 50px;
`;

export const ForumPageContent = styled.div`
  display: grid;
  grid-template-columns: 280px 580px 280px;
  justify-content: space-between;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ForumCenterContent = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-family: rubik;
  font-size: 14px;
  line-height: 16.59px;
`;
export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  gap: 10px;
`;
export const TextInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 49px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 0 14px 0 rgba(30, 30, 30, 0.1);
`;
export const Trending = styled.div`
  display: flex;
  gap: 15px;
`;
export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
export const RecentSearch = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-family: rubik;
  font-size: 12px;
  height: 22px;
  color: rgba(157, 157, 158, 1);
  margin-left: auto;
`;
export const ArrowButton = styled.div`
  background-color: transparent;
  border: none;
  height: 8px;
  width: 4px;
  font-size: 6px;
  cursor: pointer;
  color: rgba(157, 157, 158, 1);
`;
export const FeedbackCardContainer = styled.div`
  display: flex;
  width: 282px;
  height: 443px;
  gap: 20px;
  border: 0 solid black;
  border-radius: 6px;
  color: rgba(255, 255, 255, 1);
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.3);
`;
export const FeedbackCardWithTime = styled.div`
  border: 0 solid black;
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.1);
  border-radius: 6px;
  box-sizing: border-box;
`;
export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 26px;
  font-family: rubik;
  font-weight: 500;
  line-height: 14.22px;
  color: rgba(255, 37, 37, 1);
  border: 1px solid rgba(255, 225, 225, 1);
  box-sizing: border-box;
  background-color: rgba(255, 225, 225, 1);
  border-radius: 4px;
  margin: 15px 20px;
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
  width: 100%;
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
  width: 172px;
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
