import React, { Component } from "react";
import PropTypes from "prop-types";

const handleOnLoad = () => {};

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  handleOnLoad() {
    // Prevent showing the empty image with height and border until loaded.
    this.setState({ hidden: false });
  }

  render() {
    return (
      <img
        src={this.props.src}
        className={`main__thumbnail-image ${this.state.hidden ? "hidden" : ""}`}
        onLoad={this.handleOnLoad.bind(this)}
      />
    );
  }
}

// Props validation
Thumbnail.propTypes = {
  imageUrls: PropTypes.string
};

export default Thumbnail;
