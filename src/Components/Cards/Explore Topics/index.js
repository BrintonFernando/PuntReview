import React from "react";
import {
  ExploreTopics,
  ExploreTopicIcon,
  Heading,
  ExploreTopicContent,
  //   TopHeader,
  Content,
} from "./styles";
import exploreIcon from "../../../images/ExploreTopicIcon.svg";

const ExploreTopicCard = () => {
  return (
    <ExploreTopics>
      <ExploreTopicContent>
        {/* <TopHeader> */}
        <ExploreTopicIcon src={exploreIcon} alt="exploreIcon" />
        <Heading>Explore Topics</Heading>
        <Content>Lorem Ipsum</Content>
        {/* </TopHeader> */}
      </ExploreTopicContent>
    </ExploreTopics>
  );
};

export default ExploreTopicCard;
