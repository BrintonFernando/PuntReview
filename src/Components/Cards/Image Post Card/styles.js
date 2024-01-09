import styled from "styled-components";

export const Post = styled.div`
  display: grid;
  grid-template-rows: 60px 80px 300px 35px;
  gap: 6px;
  background-color: rgba(255, 255, 255, 1);
  height: 506px;
  width: 580px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 0 rgba(23, 23, 23, 0.1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ProfileDetails = styled.div`
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  width: 244px;
  margin: 10px 0 0 20px;
`;

export const ProfileImage = styled.img`
  cursor: pointer;
  height: 36px;
  width: 36px;
`;

export const ProfileName = styled.div`
  cursor: pointer;
  width: 70px;
  height: 14px;
  font: 12px/14.22px rubik, sans-serif;
  font-weight: 500;
  color: rgba(17, 17, 17, 1);
  margin: 0 5px;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font: 10px/14px rubik, sans-serif;
  color: rgba(98, 98, 98, 1);
  margin: 3px 4px;
`;

export const Dot = styled.img`
  height: 4px;
  width: 4px;
  color: rgba(180, 180, 180, 1);
`;

export const ExploreTopicIcon = styled.img`
  height: 8px;
  width: 8px;
  color: rgba(29, 143, 113, 1);
  margin: 0 5px 0 10px;
`;

export const Tag = styled.span`
  width: 155px;
  height: 14px;
  font: 12px/14.22px rubik, sans-serif;
  font-weight: 500;
  color: rgba(29, 143, 113, 1);
`;

export const Heading = styled.p`
  width: 478px;
  height: 19px;
  font: 16px/19px rubik, sans-serif;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  margin: 0 0 0 20px;
`;

export const Paragraph = styled.span`
  width: 478px;
  height: 45px;
  font: 13px/15.41px rubik, sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-left: 20px;
`;

export const Picture = styled.img`
  width: 580px;
  height: 300px;
`;

export const PostCardFooter = styled.div`
  display: flex;
  color: rgba(35, 35, 35, 1);
  font: 14px/16.59px rubik, sans-serif;
  font-weight: 500;
  gap: 5px;
  align-items: center;
  margin-left: 20px;
`;

export const LikeIcon = styled.img`
  height: 20px;
  width: 20px;
`;

export const CommentIcon = styled.img`
  height: 20px;
  width: 20px;
`;
