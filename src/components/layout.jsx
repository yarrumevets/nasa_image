import React, { Component } from "react";
import nasaFont from "../assets/fonts/nasalization-rg.ttf";

// Nested components.
import Header from "./header.jsx";
import Nav from "./nav.jsx";
import Main from "./main.jsx";
import Footer from "./footer.jsx";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: {},
      search: "",
      searchDesc: ""
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Nav
          doSearch={this.doSearch.bind(this)}
          changeSearch={this.changeSearch.bind(this)}
          changeSearchDesc={this.changeSearchDesc.bind(this)}
        />
        <Main imageUrls={this.state.imageUrls} />
        <Footer />
      </div>
    );
  }

  doSearch() {
    var url = "/nasaimgsearch"; // @TODO: config.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        if (xhr.status == 200) {
          var imageUrlsList = JSON.parse(xhr.responseText);
          const imageUrls = [];
          imageUrlsList.forEach(function(thumb) {
            imageUrls.push(thumb.thumbnailLink);
          });
          this.setState({ imageUrls });
        } else if (xhr.status == 400) {
          alert("400!"); // @TODO something better here.
        } else {
          alert("Not 200!"); // @TODO something better here.
        }
      }
    };

    const descParam = this.state.searchDesc
      ? `&searchDesc=${this.state.searchDesc}`
      : "";

    const params = `?search=${this.state.search}${descParam}`;
    xhr.open("GET", `${url}${params}`, true);
    xhr.send();
  }

  changeSearch(el) {
    this.setState({ search: el.target.value });
  }

  changeSearchDesc(el) {
    this.setState({ searchDesc: el.target.value });
  }
}

export default Layout;
