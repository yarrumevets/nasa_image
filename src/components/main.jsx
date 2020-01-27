import React from "react";
import Thumbnail from "./thumbnail.jsx";
import PropTypes from "prop-types";

const Main = props => {
  const thumbnails = props.imageUrls.map(el => {
    return <Thumbnail src={el} key={el} />;
  });

  return (
    <main>
      <p id="msg-text" className="main__status-text">
        {props.statusText}
      </p>
      <div id="image-area">{thumbnails}</div>
    </main>
  );
};

// Props validation
Main.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string)
  // statusText: PropTypes.string
};

export default Main;
