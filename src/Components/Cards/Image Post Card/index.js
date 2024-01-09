import React from "react";
import {
  Post,
  Content,
  ProfileDetails,
  Profile,
  ProfileImage,
  ProfileName,
  Details,
  ExploreTopicIcon,
  Tag,
  Heading,
  Paragraph,
  Picture,
  PostCardFooter,
  LikeIcon,
  CommentIcon,
  Dot,
} from "./styles";
import dot from "../../../images/Dot.svg";
import profilePhoto6 from "../../../images/ProfileImage6.svg";
import exploreIcon from "../../../images/ExploreIconGreen.svg";
import image from "../../../images/PostImage.svg";
import like from "../../../images/Like icon.svg";
import comment from "../../../images/Comment Icon.svg";

const profiles = [
  {
    id: 1,
    photo: profilePhoto6,
    name: "Amere Keita",
    details: ["1hr ago", "16th Oct 2023"],
  },
];

const ImagePost = () => {
  const profile = profiles[0];

  return (
    <Post>
      <ProfileDetails>
        <Profile>
          <ProfileImage src={profile.photo} alt="profile photo" />
          <div>
            <ExploreTopicIcon src={exploreIcon} alt="exploreIcon" />
            <Tag>Great gambling Discussion</Tag>
            <Details>
              <ProfileName>{profile.name}</ProfileName>
              <span>{profile.details[0]}</span> <Dot src={dot} alt="Dot" />{" "}
              {profile.details[1]}
            </Details>
          </div>
        </Profile>
      </ProfileDetails>
      <Content>
        <Heading>People who work in casinos, what should we know?</Heading>
        <Paragraph>
          What we should and shouldn't do, for instance.
          <br /> I have a quick opening question, say I find a chip on the
          ground, what is proper etiquette in this situation?
        </Paragraph>
      </Content>
      <Picture src={image} alt="Image" />
      <PostCardFooter>
        <LikeIcon src={like} alt="like" />
        <span>24k</span>
        <Dot src={dot} alt="Dot" />
        <CommentIcon src={comment} alt="comment" />
        <span>5k</span>
      </PostCardFooter>
    </Post>
  );
};

export default ImagePost;
