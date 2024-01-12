import React, { useState } from "react";
import {
  AddCommentContainer,
  AddCommentContent,
  ProfileImage,
  CommentInputHolder,
  ButtonContainer,
  TextInputArea,
} from "./styles";
import profile from "../../../images/Mask group.svg";

const AddCommentCard = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <AddCommentContainer>
      <AddCommentContent>
        <ProfileImage src={profile} alt="Profile Image" />
        <CommentInputHolder>
          <TextInputArea>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a Point"
              style={{
                width: "93%",
                margin: "14px",
                fontSize: "14px",
                border: "none",
                outline: "none",
                resize: "none",
                minHeight: "84px",
              }}
            />
          </TextInputArea>

          <ButtonContainer>
            <div>column 1</div>
            <div>column 2</div>
          </ButtonContainer>
        </CommentInputHolder>
      </AddCommentContent>
    </AddCommentContainer>
  );
};

export default AddCommentCard;
