import React from "react";
import {
  ExploreTopics,
  ExploreTopicIcon,
  Heading,
  ExploreTopicContent,
  Content,
} from "./styles";
import exploreIcon from "../../../images/ExploreTopicIcon.svg";
import ExploreTopicItems from "../CheckBox";

const ExploreTopicCard = () => {
  return (
    <ExploreTopics>
      <ExploreTopicContent>
        <ExploreTopicIcon src={exploreIcon} alt="exploreIcon" />
        <Heading>Explore Topics</Heading>
        <Content>Lorem Ipsum</Content>
        <ExploreTopicItems />
      </ExploreTopicContent>
    </ExploreTopics>
  );
};

export default ExploreTopicCard;
