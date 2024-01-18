import React, { useState } from "react";
import {
  AddCommentContainer,
  AddCommentContent,
  ProfileImage,
  CommentInputHolder,
  ButtonContainer,
  TextInputArea,
  CancelButton,
  SubmitButton,
} from "./styles";
import profile from "../../../images/Mask group.svg";
import smiley from "../../../images/SmileyIcon.svg";

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
            <img src={smiley} alt="Smiley" />
            <div>
              <CancelButton>Cancel</CancelButton>
              <SubmitButton>Send</SubmitButton>
            </div>
          </ButtonContainer>
        </CommentInputHolder>
      </AddCommentContent>
    </AddCommentContainer>
  );
};

export default AddCommentCard;
