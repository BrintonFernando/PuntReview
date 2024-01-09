import React from "react";
import { AddPostCard, TextInput, ProfileImage, Buttons } from "./styles";
import profile from "../../../images/Mask group.svg";
import TextInputComponent from "../../Buttons/TextInput";
import CustomiseButton from "../../Buttons/CustomiseButton";
import MessageIcon from "../../../images/MessageIcon.svg";
import CreatePollIcon from "../../../images/CreatePollIcon.svg";
import ContributeIcon from "../../../images/ContributeIcon.svg";

const buttonConfig = [
  { content: "Start a Discussion", icon: MessageIcon },
  { content: "Create a Poll", icon: CreatePollIcon },
  { content: "Contribute", icon: ContributeIcon },
];

const CreatePost = () => (
  <AddPostCard>
    <TextInput>
      <ProfileImage src={profile} alt="profile" />
      <TextInputComponent width={85} />
    </TextInput>
    <Buttons>
      {buttonConfig.map((config, index) => (
        <CustomiseButton key={index} {...config} />
      ))}
    </Buttons>
  </AddPostCard>
);

export default CreatePost;
