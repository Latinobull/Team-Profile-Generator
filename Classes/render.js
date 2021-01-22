const path = require("path");
const fs = require("fs");

//going to need this eventually in this script

const distDir = path.resolve(__dirname, "../dist");

const replacePlace = (dist, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return replacePlace(pattern, value);
};

const renderManager = (manager) => {
  let dist = fs.readFileSync(path.resolve(distdir, "manager.html"), "utf-8");
  dist = replacePlace(dist, "name", manager.getName());
  dist = replacePlace(dist, "role", manager.getRole());
  dist = replacePlace(dist, "email", manager.getEmail());
  dist = replacePlace(dist, "id", manager.getId());
  dist = replacePlace(dist, "officeNumber", manager.getOfficeNum());
  return template;
};
