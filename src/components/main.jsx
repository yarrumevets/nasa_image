import React from "react";
import Thumbnail from "./thumbnail.jsx";

const Main = props => {
  console.log("main props: ", props);

  const thumbnails = [];
  for (let i in props.imageUrls) {
    thumbnails.push(
      <Thumbnail srcUrl={props.imageUrls[i]} key={props.imageUrls[i]} />
    );
  }

  return (
    <main>
      <p id="msg-text" className="status-text">
        ...
      </p>
      <div id="image-area">{thumbnails}</div>
    </main>
  );
};

export default Main;
