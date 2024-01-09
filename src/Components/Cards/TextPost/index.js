import React from "react";
import {
  Post,
  Heading,
  ProfileDetails,
  Profile,
  ProfileImage,
  ProfileName,
  Details,
  Dot,
  ExploreTopicIcon,
  Tag,
  PostCardFooter,
  LikeIcon,
  CommentIcon,
} from "./styles";
import profilePhoto7 from "../../../images/ProfileImage7.svg";
import exploreIcon from "../../../images/ExploreIconGreen.svg";
import likeIcon from "../../../images/Like icon.svg";
import commentIcon from "../../../images/Comment Icon.svg";
import dotIcon from "../../../images/Dot.svg";

const profiles = [
  {
    id: 1,
    photo: profilePhoto7,
    name: "Amere Keita",
    details: ["1hr ago", "16th Oct 2023"],
  },
];

const TextPost = () => {
  const { photo, name, details } = profiles[0];

  return (
    <Post>
      <ProfileDetails>
        <Profile>
          <ProfileImage src={photo} alt="profile photo" />
          <div>
            <ExploreTopicIcon src={exploreIcon} alt="exploreIcon" />
            <Tag>Great gambling Discussion</Tag>
            <Details>
              <ProfileName>{name}</ProfileName>
              <span>{details[0]}</span> <Dot src={dotIcon} alt="Dot" />{" "}
              {details[1]}
            </Details>
          </div>
        </Profile>
      </ProfileDetails>
      <Heading>Scandal? All action casino</Heading>
      <PostCardFooter>
        <LikeIcon src={likeIcon} alt="like" />
        <span>24k</span>
        <Dot src={dotIcon} alt="Dot" />
        <CommentIcon src={commentIcon} alt="comment" />
        <span>5k</span>
      </PostCardFooter>
    </Post>
  );
};

export default TextPost;
