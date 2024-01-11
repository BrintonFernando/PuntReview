import React from "react";
import {
  CommentContainer,
  Profile,
  CommentDetails,
  PhotoContainer,
  Photo,
  ProfileName,
  Dot,
  Designation,
  Update,
} from "./styles";
import image from "../../../images/CommentProfile.svg";
import dot from "../../../images/Dot.svg";

const profiles = [
  {
    id: 1,
    photo: image,
    name: "Robert D’Souza ",
    details: ["1hr ago", "16th Oct 2023"],
  },
];

const CommentCard = () => {
  return (
    <div>
      {profiles.map(({ id, photo, name, details }) => (
        <CommentContainer key={id}>
          <Profile>
            <PhotoContainer>
              <Photo src={photo} alt="Profile Photo" />
            </PhotoContainer>
            <ProfileName>
              {name}
              <Designation>(Analyst)</Designation>
            </ProfileName>
            <Update>
              <div>{details[0]}</div>
              <div>
                <Dot src={dot} alt="Dot" />
              </div>
              <div>{details[1]}</div>
            </Update>
          </Profile>
          <CommentDetails />
        </CommentContainer>
      ))}
    </div>
  );
};

export default CommentCard;
