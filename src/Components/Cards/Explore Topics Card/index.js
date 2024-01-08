import React from "react";
import {
  ExploreTopics,
  ExploreTopicIcon,
  Heading,
  ExploreTopicContent,
  Content,
} from "./styles";
import exploreIcon from "../../../images/ExploreTopicIcon.svg";
import ExploreTopicsCheckBoxLists from "./Explore Topics Checkbox";

const ExploreTopicCard = () => (
  <ExploreTopics>
    <ExploreTopicContent>
      <ExploreTopicIcon src={exploreIcon} alt="exploreIcon" />
      <Heading>Explore Topics</Heading>
      <Content>Lorem Ipsum</Content>
    </ExploreTopicContent>
    <ExploreTopicsCheckBoxLists />
  </ExploreTopics>
);

export default ExploreTopicCard;
