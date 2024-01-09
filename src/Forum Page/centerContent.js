import React, { useState } from "react";
import {
  Buttons,
  ForumCenterContent,
  TextInput,
  Icon,
  TextInputContainer,
  Trending,
  RecentSearch,
  ArrowButton,
} from "./styles";
import CreatePost from "../Components/Cards/Whats on your mind Card";
import CustomiseButton from "../Components/Buttons/CustomiseButton";
import TextInputComponent from "../Components/Buttons/TextInput";
import SearchIcon from "../images/SearchIcon.svg";
import IconWithName from "../Components/Buttons/TrendingButton";
import TrendingIcon from "../images/TrendingIcon.svg";
import ImagePost from "../Components/Cards/Image Post Card";
import TextPost from "../Components/Cards/TextPost";
import LargeTextPosts from "../Components/Cards/Large TextPost";
import FeedbackEndsCard from "./FeedbackEndsCard";

const buttonConfig = [{ content: "Latest Posts" }, { content: "Hot threads" }];

const CenterContent = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (index) => {
    setClickedButton(index);
  };

  const data = [
    { iconSrc: TrendingIcon, name: "trending 1" },
    { iconSrc: TrendingIcon, name: "trending 2" },
    { iconSrc: TrendingIcon, name: "promoted" },
  ];

  return (
    <ForumCenterContent>
      <CreatePost />
      <Buttons>
        {buttonConfig.map((config, index) => (
          <CustomiseButton
            key={index}
            {...config}
            onClick={() => handleButtonClick(index)}
            buttonStyles={{
              background:
                clickedButton === index
                  ? "linear-gradient(to right, rgba(117, 17, 244, 1), rgba(189, 8, 218, 1))"
                  : "rgba(255, 255, 255, 1)",
              color: clickedButton === index ? "white" : "rgba(87, 92, 109, 1)",
              padding: "16px 22px",
              margin: "0",
            }}
          />
        ))}
      </Buttons>
      <TextInputContainer>
        <TextInput>
          <TextInputComponent
            placeholder="Search for casinos, games, bonuses and more"
            width={85}
            padding="10px 0px"
          />
          <Icon src={SearchIcon} alt="search" />
        </TextInput>
        <Trending>
          {data.map((item, index, array) => (
            <IconWithName
              key={index}
              iconSrc={item.iconSrc}
              name={item.name}
              iconBackground="linear-gradient(to right, rgba(117, 17, 244, 1), rgba(189, 8, 218, 1))"
              isLastChild={index === array.length - 1}
            />
          ))}
          <RecentSearch>
            Recent Searches
            <ArrowButton>&#9660;</ArrowButton>
          </RecentSearch>
        </Trending>
      </TextInputContainer>
      <ImagePost />
      <TextPost />
      <LargeTextPosts />
      <ImagePost />
      <TextPost />
      <LargeTextPosts />
      <FeedbackEndsCard />
    </ForumCenterContent>
  );
};

export default CenterContent;
