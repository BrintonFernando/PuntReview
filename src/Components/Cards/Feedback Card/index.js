import React from "react";
import {
  FeedbackCardContainer,
  ProfileDetails,
  Profile,
  ProfileName,
  Details,
  ProfileImage,
  Dot,
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

const FeedbackCard = () => {
  return (
    <FeedbackCardContainer>
      <ProfileDetails>
        {profiles.map((profile) => (
          <Profile key={profile.id}>
            <ProfileImage src={profile.photo} alt="profile photo" />
            <div>
              <ProfileName>{profile.name}</ProfileName>
              <Details>
                <span>{profile.details[0]}</span> <Dot src={dot} alt="Dot" />{" "}
                {profile.details[1]}
              </Details>
            </div>
            <div>
              <Question>What's your favorite aspect of online poker?</Question>
            </div>
          </Profile>
        ))}
      </ProfileDetails>
    </FeedbackCardContainer>
  );
};

export default FeedbackCard;
