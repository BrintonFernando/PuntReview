import React from "react";
import {
  LargeTextPost,
  Content,
  Heading,
  Paragraph,
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
import profilePhoto8 from "../../../images/ProfileImage8.svg";
import exploreIcon from "../../../images/ExploreIconGreen.svg";
import likeIcon from "../../../images/Like icon.svg";
import commentIcon from "../../../images/Comment Icon.svg";
import dotIcon from "../../../images/Dot.svg";

const profiles = [
  {
    id: 1,
    photo: profilePhoto8,
    name: "Amere Keita",
    details: ["1hr ago", "16th Oct 2023"],
  },
];

const LargeTextPosts = () => {
  const { photo, name, details } = profiles[0];

  return (
    <LargeTextPost>
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
      <Content>
        <Heading>People who work in casinos, what should we know?</Heading>
        <Paragraph>
          Hi- we’ve never cruised before but frequent the casinos. Just got an
          offer for free carnival cruise, free drinks in the casino, and casino
          cash. Anyone ever take them up on this offer? <br /> <br />I think
          about $500 is what I do. What happens is I spend an amount on the
          slots and win some back and play on that. Usually, if I play for a
          couple of hours on that, I can get offers. One of my first cruises, I
          won a few hundred and played on that the whole cruise, and it looked
          like I spent a TON, but I only spent a couple hundred.
        </Paragraph>
      </Content>
      <PostCardFooter>
        <LikeIcon src={likeIcon} alt="like" />
        <span>24k</span>
        <Dot src={dotIcon} alt="Dot" />
        <CommentIcon src={commentIcon} alt="comment" />
        <span>5k</span>
      </PostCardFooter>
    </LargeTextPost>
  );
};

export default LargeTextPosts;
