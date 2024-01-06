import React from "react";
import { ForumPage, ForumPageContent, RightContent } from "./styles";
import Breadcrumbs from "../Components/Bread Crumps";
import ExploreTopicsCard from "../Components/Cards/Explore Topics Card";
import TopContributorsCard from "../Components/Cards/Top Contributors Card";
import FeedbackCard from "../Components/Cards/Feedback Card";

const Forum = () => {
  const paths = [
    { label: "Home", link: "/" },
    { label: "Forum", link: "/forum" },
  ];

  return (
    <ForumPage>
      <Breadcrumbs paths={paths} />
      <ForumPageContent>
        <ExploreTopicsCard />
        <div>center screen</div>
        <RightContent>
          <TopContributorsCard />
          {[...Array(2)].map((_, index) => (
            <FeedbackCard key={index} />
          ))}
        </RightContent>
      </ForumPageContent>
    </ForumPage>
  );
};

export default Forum;
