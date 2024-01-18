import React, { useEffect } from "react";
import { ForumPage, ForumPageContent, RightContent } from "./styles";
import { useBreadcrumb } from "../Components/Bread Crumps/BreadcrumbContext";
import Breadcrumbs from "../Components/Bread Crumps";
import ExploreTopicsCard from "../Components/Cards/Explore Topics Card";
import CenterContent from "./centerContent";
import TopContributorsCard from "../Components/Cards/Top Contributors Card";
import FeedbackCard from "../Components/Cards/Feedback Card";
import Header from "../Header";
import GameRatings from "../Game Ratings";
import Footer from "../Footer";

const Forum = () => {
  const { updateBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    updateBreadcrumbs([
      { label: "Home", link: "/" },
      { label: "Forum", link: "/forum" },
    ]);
  }, []);
  return (
    <>
      <Header />
      <GameRatings />
      <ForumPage>
        <Breadcrumbs />
        <ForumPageContent>
          <ExploreTopicsCard />
          <CenterContent />
          <RightContent>
            <TopContributorsCard />
            {[...Array(2)].map((_, index) => (
              <FeedbackCard key={index} />
            ))}
          </RightContent>
        </ForumPageContent>
      </ForumPage>
      <Footer />
    </>
  );
};

export default Forum;
