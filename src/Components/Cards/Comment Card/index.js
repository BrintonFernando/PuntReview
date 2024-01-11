import React from "react";
import {
  Comment,
  CommentContainer,
  ProfileContainer,
  Profile,
  PhotoContainer,
  Photo,
  ProfileName,
  Designation,
  Update,
} from "./styles";
import image from "../../../images/CommentProfile.svg";
import dot from "../../../images/Dot.svg";

const CommentCard = () => {
  const profiles = [
    {
      id: 1,
      photo: image,
      name: "Robert D’Souza",
      designation: "(Analyst)",
      details: ["1hr ago", "16th Oct 2023"],
    },
  ];

  return (
    <Comment>
      {profiles.map(({ id, photo, name, designation, details }) => (
        <CommentContainer key={id}>
          <PhotoContainer>
            <Photo src={photo} alt="Profile Photo" />
          </PhotoContainer>
          <ProfileContainer>
            {/* <Profile>
              <div>
                <ProfileName>
                  {name}
                  <Designation>{designation}</Designation>
                </ProfileName>
                <Update>
                  <div>{details[0]}</div>
                  <div>
                    <img src={dot} alt="Dot" />
                  </div>
                  <div>{details[1]}</div>
                </Update>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero, Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.{" "}
                </p>
              </div>
            </Profile> */}
          </ProfileContainer>
        </CommentContainer>
      ))}
    </Comment>
  );
};

export default CommentCard;
