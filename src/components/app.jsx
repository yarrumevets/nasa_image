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
    // Render with no images and display loading indicator.
    this.setState({ imageUrls: [], statusText: "searching..." });
    e.preventDefault();
    this.nasaImageQuery(this.state.search, this.state.searchDesc).then(
      imageUrls => {
        // Remove loading indicator and render with new images.
        this.setState({ imageUrls, statusText: "" });
      }
    );
  }

  nasaImageQuery(search, searchDesc) {
    const descParam = searchDesc ? `&searchDesc=${searchDesc}` : "";
    const queryUrl = `${window.location.href}nasaimgsearch?search=${search}${descParam}`;
    return axios.get(queryUrl).then(axiosRes => {
      var imageUrlsList = axiosRes.data;
      const imageUrls = [];
      imageUrlsList.forEach(function(thumb) {
        imageUrls.push(thumb);
      });
      return imageUrls;
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
