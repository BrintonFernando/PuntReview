import React from "react";
import {
  FeedbackCardContainer,
  ProfileDetails,
  Profile,
  ProfileImage,
  ProfileName,
  Details,
  Dot,
  VotingContent,
  Question,
  FeedbackCardFooter,
  LikeIcon,
  CommentIcon,
} from "./styles";
import like from "../../../images/Like icon.svg";
import comment from "../../../images/Comment Icon.svg";
import profilePhoto5 from "../../../images/ProfileImage5.svg";
import dot from "../../../images/Dot.svg";
import FeedbackCheckBoxLists from "./Feedback Checkbox/FeedbackCheckboxLists";
import FeedbackEndsCheckBoxLists from "../../../Forum Page/FeedbackEndsCheckboxLists";

const profiles = [
  {
    id: 1,
    photo: profilePhoto5,
    name: "Amere Keita",
    details: ["1hr ago", "16th Oct 2023"],
  },
];

const FeedbackCard = () => (
  <div>
    {profiles.map(({ id, photo, name, details }) => (
      <FeedbackCardContainer key={id}>
        <ProfileDetails>
          <Profile>
            <ProfileImage src={photo} alt="profile photo" />
            <div>
              <ProfileName>{name}</ProfileName>
              <Details>
                <span>{details[0]}</span> <Dot src={dot} alt="Dot" />{" "}
                {details[1]}
              </Details>
            </div>
          </Profile>
        </ProfileDetails>
        <VotingContent>
          <Question>What's your favorite aspect of online poker?</Question>
          {/* Conditionally render FeedbackCheckBoxLists or FeedbackEndsCheckBoxLists */}
          {id % 2 === 1 ? (
            <FeedbackCheckBoxLists />
          ) : (
            <FeedbackEndsCheckBoxLists />
          )}
          <FeedbackCardFooter>
            <LikeIcon src={like} alt="like" />
            <span>24k</span>
            <Dot src={dot} alt="Dot" />
            <CommentIcon src={comment} alt="comment" />
            <span>5k</span>
          </FeedbackCardFooter>
        </VotingContent>
      </FeedbackCardContainer>
    ))}
  </div>
);

export default FeedbackCard;
