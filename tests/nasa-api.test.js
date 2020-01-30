// Jest
// With a __mocks__ folder present in the project root, node/root modules' mock counterpart will be imported instead (axios).

// Server:
const nasaApi = require("../nasa-api");

test(`Nasa api getImages function should return the array of strings ["e.t.jpg", "alf.jpg"]`, () => {
  // Arguments could be anything here; the returned object from the Axios mock is always the same.
  // What is being tested is whether the getImages function properly parses a valid response object.
  return nasaApi.getImages("ufo", "alien").then(val => {
    expect(val).toMatchObject(["e.t.jpg", "alf.jpg"]);
  });
});

// React components:
import React from "react";

// Snapshots of React components:
import renderer from "react-test-renderer";
import Thumbnail from "../src/components/thumbnail.jsx";

// ! Snapshots are created on first the test run and assume the current state of the component is correct.
// Changes affecting the rendered component either in the jsx file itself or by different props
// set in the test below will cause the test to fail and snapshots will need to be updated.
test("Thumbnail becomes unhidden when the image has loaded", () => {
  const component = renderer.create(<Thumbnail src="rocket.jpg" />);
  let tree = component.toJSON();
  // Prior to the image loading.
  expect(tree).toMatchSnapshot();
  tree.props.onLoad();
  tree = component.toJSON();
  // Change applied to the element after the image has loaded.
  expect(tree).toMatchSnapshot();
});

// Logic in a React component:
import App from "../src/components/app.jsx";
test("nasaImageQuery function will populate imageUrls arry", () => {
  const app = new App();
  // nasaImageQuery args only affect the query string which doesn't change the test results.
  return app.nasaImageQuery("any", "thing").then(val => {
    expect(val).toMatchObject(["moon.jpg", "sun.jpg"]);
  });
});
