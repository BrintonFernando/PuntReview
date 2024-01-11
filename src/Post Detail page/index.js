// PostDetails.js
import React, { useEffect } from "react";
import { useBreadcrumb } from "../Components/Bread Crumps/BreadcrumbContext";
import { PostDetailContainer } from "./styles";
import Header from "../Header";
import GameRatings from "../Game Ratings";
import Breadcrumbs from "../Components/Bread Crumps";
import ImagePost from "../Components/Cards/Image Post Card";
import CommentCard from "../Components/Cards/Comment Card";
import Footer from "../Footer";

const PostDetails = () => {
  const { updateBreadcrumbs } = useBreadcrumb();

  useEffect(() => {
    updateBreadcrumbs([
      { label: "Home", link: "/" },
      { label: "Forum", link: "/forum" },
      { label: "Post Detail Page", link: "/post/:postId" },
    ]);
  }, [updateBreadcrumbs]);

  // Fetch post details based on the postId and display them
  // ...

  return (
    <>
      <Header />
      <GameRatings />
      <PostDetailContainer>
        <Breadcrumbs />
        <ImagePost />
        <CommentCard />
      </PostDetailContainer>
      <Footer />
    </>
  );
};

export default PostDetails;
