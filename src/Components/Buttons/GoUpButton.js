import React from "react";
import upArrowImage from "../../images/UpArrow.svg";

const ScrollToTopButton = () => (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    style={{
      display: "flex",
      width: "63px",
      height: "16px",
      cursor: "pointer",
      border: "none",
      margin: "30px 100px 30px auto",
      backgroundColor: "transparent",
    }}
  >
    <img src={upArrowImage} alt="Up Arrow" style={{ marginRight: "5px" }} />
  </button>
);

export default ScrollToTopButton;
