import React from "react";

const Main = props => {
  console.log("main props: ", props);
  return <img src={props.srcUrl} className="thumbnail-image" />;
};

export default Main;
