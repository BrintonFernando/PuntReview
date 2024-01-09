import React from "react";
import upArrowImage from "../../images/UpArrow.svg";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        border: "none",
        padding: "25px 100px",
      }}
    >
      <img src={upArrowImage} alt="Up Arrow" style={{ marginRight: "5px" }} />
    </button>
  );
};

export default ScrollToTopButton;
