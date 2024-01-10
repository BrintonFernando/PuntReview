import React from "react";
import {
  CommentContainer,
  ProfileImage,
  ProfileName,
  CommentDetails,
} from "./styles";

const CommentCard = () => {
  return (
    <CommentContainer>
      <ProfileImage />
      <ProfileName />
      <CommentDetails />
    </CommentContainer>
  );
};

export default CommentCard;
