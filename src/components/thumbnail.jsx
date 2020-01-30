import React, { Component } from "react";
import PropTypes from "prop-types";

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  handleOnLoad() {
    // Prevent showing an empty image border until loaded.
    this.setState({ hidden: false });
  }

  render() {
    return (
      <img
        src={this.props.src}
        className={`main__thumbnail-image`}
        aria-hidden={this.state.hidden}
        onLoad={this.handleOnLoad.bind(this)}
      />
    );
  }
}

// Props validation
Thumbnail.propTypes = {
  src: PropTypes.string
};

export default Thumbnail;
