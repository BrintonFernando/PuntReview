import React, { useState, useEffect } from "react";
import { FeedbackCardWithTime, Time, FeedbackCardContainer } from "./styles";
import {
  ProfileDetails,
  Profile,
  ProfileImage,
  ProfileName,
  Details,
  Dot,
  VotingContent,
  Question,
  FeedbackCardFooter,
  LikeIcon,
  CommentIcon,
} from "../Components/Cards/Feedback Card/styles";
import like from "../images/Like icon.svg";
import comment from "../images/Comment Icon.svg";
import profilePhoto5 from "../images/ProfileImage5.svg";
import dot from "../images/Dot.svg";
import FeedbackCheckBoxLists from "../Components/Cards/Feedback Card/Feedback Checkbox/FeedbackCheckboxLists";
import FeedbackEndsCheckBoxLists from "./FeedbackEndsCheckboxLists";

const profiles = [
  {
    id: 1,
    photo: profilePhoto5,
    name: "Amere Keita",
    details: ["1hr ago", "16th Oct 2023"],
  },
];

const FeedbackEndsCard = () => {
  const [endTime, setEndTime] = useState(new Date("2024-12-31T23:59:59"));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = endTime - now;
      if (timeDiff <= 0) {
        clearInterval(interval);
        console.log("End time reached!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
  };

  return (
    <FeedbackCardContainer>
      <FeedbackCardWithTime>
        <ProfileDetails>
          {profiles.map(({ id, photo, name, details }) => (
            <Profile key={id}>
              <ProfileImage src={photo} alt="profile photo" />
              <div>
                <ProfileName>{name}</ProfileName>
                <Details>
                  <span>{details[0]}</span> <Dot src={dot} alt="Dot" />{" "}
                  {details[1]}
                </Details>
              </div>
            </Profile>
          ))}
        </ProfileDetails>
        <Time>Ends In: {formatTime(endTime - new Date())}</Time>
        <VotingContent>
          <Question>What's your favorite aspect of online poker?</Question>
          <FeedbackCheckBoxLists />
          <FeedbackCardFooter>
            <LikeIcon src={like} alt="like" />
            <span>24k</span>
            <Dot src={dot} alt="Dot" />
            <CommentIcon src={comment} alt="comment" />
            <span>5k</span>
          </FeedbackCardFooter>
        </VotingContent>
      </FeedbackCardWithTime>
      <FeedbackCardWithTime>
        <ProfileDetails>
          {profiles.map(({ id, photo, name, details }) => (
            <Profile key={id}>
              <ProfileImage src={photo} alt="profile photo" />
              <div>
                <ProfileName>{name}</ProfileName>
                <Details>
                  <span>{details[0]}</span> <Dot src={dot} alt="Dot" />{" "}
                  {details[1]}
                </Details>
              </div>
            </Profile>
          ))}
        </ProfileDetails>
        <Time>Ends In: {formatTime(endTime - new Date())}</Time>
        <VotingContent>
          <Question>What's your favorite aspect of online poker?</Question>
          <FeedbackEndsCheckBoxLists />
          <FeedbackCardFooter>
            <LikeIcon src={like} alt="like" />
            <span>24k</span>
            <Dot src={dot} alt="Dot" />
            <CommentIcon src={comment} alt="comment" />
            <span>5k</span>
          </FeedbackCardFooter>
        </VotingContent>
      </FeedbackCardWithTime>
    </FeedbackCardContainer>
  );
};

export default FeedbackEndsCard;
