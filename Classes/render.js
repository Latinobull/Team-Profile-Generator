const path = require("path");
const fs = require("fs");

//going to need this eventually in this script

const distDir = path.resolve(__dirname, "../dist");

const replacePlace = (dist, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return replacePlace(pattern, value);
};
