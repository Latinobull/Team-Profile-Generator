const path = require("path");
const fs = require("fs");

const distDir = path.resolve(__dirname, "../dist");

//REMMEBER THIS CODE FOR WHEN YOU NEED THIS REGEX AGAIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const replacePlace = (dist, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return dist.replace(pattern, value);
};

const renderManager = (manager) => {
  let dist = fs.readFileSync(path.resolve(distDir, "manager.html"), "utf-8");
  dist = replacePlace(dist, "name", manager.getName());
  dist = replacePlace(dist, "role", manager.getRole());
  dist = replacePlace(dist, "email", manager.getEmail());
  dist = replacePlace(dist, "id", manager.getId());
  dist = replacePlace(dist, "officeNumber", manager.getOfficeNum());
  return dist;
};

const renderEngineer = (engineer) => {
  let dist = fs.readFileSync(path.resolve(distDir, "engineer.html"), "utf-8");
  dist = replacePlace(dist, "name", engineer.getName());
  dist = replacePlace(dist, "role", engineer.getRole());
  dist = replacePlace(dist, "email", engineer.getEmail());
  dist = replacePlace(dist, "id", engineer.getId());
  dist = replacePlace(dist, "github", engineer.getGithub());
  return dist;
};

const renderIntern = (intern) => {
  let dist = fs.readFileSync(path.resolve(distDir, "intern.html"), "utf-8");
  dist = replacePlace(dist, "name", intern.getName());
  dist = replacePlace(dist, "role", intern.getRole());
  dist = replacePlace(dist, "email", intern.getEmail());
  dist = replacePlace(dist, "id", intern.getId());
  dist = replacePlace(dist, "school", intern.getSchool());
  return dist;
};

const renderMain = (html) => {
  const dist = fs.readFileSync(path.resolve(distDir, "mock.html"), "utf-8");
  return replacePlace(dist, "team", html);
};
const render = (employees) => {
  const html = [];

  html.push(
    ...employees
      .filter((emp) => emp.getrole() === "Manager")
      .map((manager) => renderManager(manager))
  );
  html.push(
    ...employees
      .filter((emp) => emp.getrole() === "Engineer")
      .map((engineer) => renderEngineer(engineer))
  );
  html.push(
    ...employees
      .filter((emp) => emp.getrole() === "Intern")
      .map((intern) => renderIntern(intern))
  );

  return renderMain(html.join(""));
};

module.exports = render;
