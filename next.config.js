const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withTM = require("next-transpile-modules");

module.exports = withCSS(
  withSass(
    withTM({
      transpileModules: ["react-flexbox-grid", "react-syntax-highlighter"],
      webpack: function (config) {
        config.module.rules.push({
          test: /\.md$/,
          use: "raw-loader",
        });
        return config;
      },
      i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ["en-US", "is", "nl-NL"],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: "en-US",
      },
    })
  )
);
