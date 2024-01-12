import React from "react";
import {
  Comment,
  CommentContainer,
  PhotoContainer,
  Photo,
  ProfileContainer,
  Profile,
  ProfileDetails,
  ProfileName,
  Designation,
  Update,
  Description,
} from "./styles";
import image from "../../../images/CommentProfile.svg";
import dot from "../../../images/Dot.svg";

const CommentCard = () => {
  const comments = [
    {
      id: 1,
      photo: image,
      name: "Robert D’Souza",
      designation: "(Analyst)",
      details: ["1hr ago", "16th Oct 2023"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero, Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div>
      <Comment>
        {comments.map((comment) => (
          <CommentContainer key={comment.id}>
            <PhotoContainer>
              <Photo src={comment.photo} alt="Profile Photo" />
            </PhotoContainer>
            <ProfileContainer>
              <Profile>
                <ProfileDetails>
                  <ProfileName>{comment.name}</ProfileName>
                  <Designation>{comment.designation}</Designation>
                </ProfileDetails>
                <Update>
                  <div>{comment.details[0]}</div>
                  <div>
                    <img src={dot} alt="Dot" />
                  </div>
                  <div>{comment.details[1]}</div>
                </Update>
              </Profile>
              <Description>{comment.description}</Description>
            </ProfileContainer>
          </CommentContainer>
        ))}
        {comments.map((comment) => (
          <CommentContainer key={comment.id}>
            <PhotoContainer>
              <Photo src={comment.photo} alt="Profile Photo" />
            </PhotoContainer>
            <ProfileContainer>
              <Profile>
                <ProfileDetails>
                  <ProfileName>{comment.name}</ProfileName>
                  <Designation>{comment.designation}</Designation>
                </ProfileDetails>
                <Update>
                  <div>{comment.details[0]}</div>
                  <div>
                    <img src={dot} alt="Dot" />
                  </div>
                  <div>{comment.details[1]}</div>
                </Update>
              </Profile>
              <Description>{comment.description}</Description>
            </ProfileContainer>
          </CommentContainer>
        ))}
        {comments.map((comment) => (
          <CommentContainer key={comment.id}>
            <PhotoContainer>
              <Photo src={comment.photo} alt="Profile Photo" />
            </PhotoContainer>
            <ProfileContainer>
              <Profile>
                <ProfileDetails>
                  <ProfileName>{comment.name}</ProfileName>
                  <Designation>{comment.designation}</Designation>
                </ProfileDetails>
                <Update>
                  <div>{comment.details[0]}</div>
                  <div>
                    <img src={dot} alt="Dot" />
                  </div>
                  <div>{comment.details[1]}</div>
                </Update>
              </Profile>
              <Description>{comment.description}</Description>
            </ProfileContainer>
          </CommentContainer>
        ))}
      </Comment>
    </div>
  );
};

export default CommentCard;
