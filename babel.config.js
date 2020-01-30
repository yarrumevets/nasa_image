const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      useBuiltIns: "usage"
    }
  ],
  // Added react preset here for Jest
  "@babel/preset-react"
];

module.exports = { presets };
