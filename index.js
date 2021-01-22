const Manager = require("./Classes/Manager");
const Engineer = require("./Classes/Engineer");
const Intern = require("./Classes/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const render = require("./Classes/render");

const OutputDIR = path.resolve(__dirname, "Output");
const outputPath = path.join(OutputDIR, "TheTeam.html");

function manager() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the Manager?",
      name: "name",
    },
    {
      type: "number",
      message: "What is his office number?",
      name: "officeNum",
    },
    {
      type: "number",
      message: "What is his id number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ]);
}
