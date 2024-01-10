import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForumPage from "./Forum Page";
import PostDetails from "./Post Detail page";
import ImagePost from "./Components/Cards/Image Post Card";
import { BreadcrumbProvider } from "./Components/Bread Crumps/BreadcrumbContext";

const App = () => {
  return (
    <Router>
      <BreadcrumbProvider>
        <Routes>
          <Route path="/" element={<ForumPage />} />
          <Route path="/forum" element={<ForumPage />} />
          {/* Ensure that the :postId parameter is defined in the route */}
          <Route path="/post/:postId" element={<PostDetails />} />
          <Route path="/image-post" element={<ImagePost />} />
        </Routes>
      </BreadcrumbProvider>
    </Router>
  );
};

export default App;
