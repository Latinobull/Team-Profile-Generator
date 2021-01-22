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

const renderManager = (engineer) => {
  let dist = fs.readFileSync(path.resolve(distdir, "engineer.html"), "utf-8");
  dist = replacePlace(dist, "name", engineer.getName());
  dist = replacePlace(dist, "role", engineer.getRole());
  dist = replacePlace(dist, "email", engineer.getEmail());
  dist = replacePlace(dist, "id", engineer.getId());
  dist = replacePlace(dist, "github", engineer.getGithub());
  return template;
};

// const render = employees => {
//     const html = []

// html.push(...employees.filter(emp => emp.getrole()=== "Manager").map(manager ))

// }
