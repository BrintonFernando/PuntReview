import React from "react";
import {
  ExploreTopics,
  ExploreTopicIcon,
  Heading,
  ExploreTopicContent,
  Content,
} from "./styles";
import exploreIcon from "../../../images/ExploreTopicIcon.svg";
import CheckBoxLists from "../CheckBox";

const ExploreTopicCard = () => {
  return (
    <ExploreTopics>
      <ExploreTopicContent>
        <ExploreTopicIcon src={exploreIcon} alt="exploreIcon" />
        <Heading>Explore Topics</Heading>
        <Content>Lorem Ipsum</Content>
      </ExploreTopicContent>
      <CheckBoxLists />
    </ExploreTopics>
  );
};

export default ExploreTopicCard;
