module.exports = {
  presets: [
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: { version: 3, proposals: true } }],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: ["react-hot-loader/babel", "@babel/plugin-transform-runtime"],
  env: {},
};
