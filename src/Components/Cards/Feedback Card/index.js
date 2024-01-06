import React from "react";
import {
  FeedbackCardContainer,
  ProfileDetails,
  Profile,
  ProfileName,
  Details,
  ProfileImage,
  Dot,
  VotingContent,
  Question,
} from "./styles";
import profilePhoto5 from "../../../images/ProfileImage5.svg";
import dot from "../../../images/Dot.svg";

const profiles = [
  {
    id: 1,
    photo: profilePhoto5,
    name: "Amere Keita",
    details: ["1hr ago", "16th Oct 2023"],
  },
];

const FeedbackCard = () => (
  <FeedbackCardContainer>
    <ProfileDetails>
      {profiles.map(({ id, photo, name, details }) => (
        <Profile key={id}>
          <ProfileImage src={photo} alt="profile photo" />
          <div>
            <ProfileName>{name}</ProfileName>
            <Details>
              <span>{details[0]}</span> <Dot src={dot} alt="Dot" /> {details[1]}
            </Details>
            <VotingContent>
              <Question>What's your favorite aspect of online poker?</Question>
            </VotingContent>
          </div>
        </Profile>
      ))}
    </ProfileDetails>
  </FeedbackCardContainer>
);

export default FeedbackCard;
