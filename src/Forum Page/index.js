import React from "react";
import { ForumPage, ForumPageContent } from "./styles";
import Breadcrumbs from "../Components/Bread Crumps";
import ExploreTopics from "../Components/Cards/Explore Topics";

const Forum = () => {
  const paths = [
    { label: "Home", link: "/" },
    { label: "Forum", link: "/forum" },
  ];

  return (
    <ForumPage>
      <Breadcrumbs paths={paths} />
      <ForumPageContent>
        <ExploreTopics />
      </ForumPageContent>
    </ForumPage>
  );
};

export default Forum;
