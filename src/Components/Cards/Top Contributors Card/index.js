import React from "react";
import {
  TopContributors,
  Header,
  ProfileLists,
  Profile,
  ProfileImage,
  ProfileName,
  Details,
  Dot,
} from "./styles";
import profilePhoto1 from "../../../images/ProfileImage1.svg";
import profilePhoto2 from "../../../images/ProfileImage2.svg";
import profilePhoto3 from "../../../images/ProfileImage3.svg";
import profilePhoto4 from "../../../images/ProfileImage4.svg";
import dot from "../../../images/Dot.svg";

const profiles = [
  {
    id: 1,
    photo: profilePhoto1,
    name: "Floyd Miles",
    details: ["IND", "Advanced Novice"],
  },
  {
    id: 2,
    photo: profilePhoto2,
    name: "Courtney Henry",
    details: ["IND", "Advanced Novice"],
  },
  {
    id: 3,
    photo: profilePhoto3,
    name: "Cody Fisher",
    details: ["IND", "Advanced Novice"],
  },
  {
    id: 4,
    photo: profilePhoto4,
    name: "Ronald Richards",
    details: ["IND", "Advanced Novice"],
  },
];

const TopContributorsCard = () => (
  <TopContributors>
    <Header>Top Contributors</Header>
    <ProfileLists>
      {profiles.map(({ id, photo, name, details }) => (
        <Profile key={id}>
          <ProfileImage src={photo} alt="profile photo" />
          <div>
            <ProfileName>{name}</ProfileName>
            <Details>
              <span>{details[0]}</span> <Dot src={dot} alt="Dot" /> {details[1]}
            </Details>
          </div>
        </Profile>
      ))}
    </ProfileLists>
  </TopContributors>
);

export default TopContributorsCard;
