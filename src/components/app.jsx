import React, { Component } from "react";

import Header from "./header.jsx";
import Search from "./search.jsx";
import Main from "./main.jsx";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [],
      search: "",
      searchDesc: ""
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Search
          doSearch={this.doSearch.bind(this)}
          changeSearch={this.changeSearch.bind(this)}
          changeSearchDesc={this.changeSearchDesc.bind(this)}
        />
        <Main
          imageUrls={this.state.imageUrls}
          statusText={this.state.statusText}
        />
      </div>
    );
  }

  doSearch(e) {
    e.preventDefault();
    // Remove all images.
    this.setState({ imageUrls: [], statusText: "searching..." });
    const descParam = this.state.searchDesc
      ? `&searchDesc=${this.state.searchDesc}`
      : "";
    const queryUrl = `/nasaimgsearch?search=${this.state.search}${descParam}`;
    axios.get(queryUrl).then(axiosRes => {
      var imageUrlsList = axiosRes.data;
      const imageUrls = [];
      imageUrlsList.forEach(function(thumb) {
        // nasaId can be passed along to be used as the list item key.
        // Currently setting the image url as the key.
        imageUrls.push(thumb.thumbnailLink);
      });
      this.setState({ imageUrls, statusText: "" });
    });
  }

  changeSearch(el) {
    this.setState({ search: el.target.value });
  }

  changeSearchDesc(el) {
    this.setState({ searchDesc: el.target.value });
  }
}

export default App;
