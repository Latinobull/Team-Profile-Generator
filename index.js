const Manager = require("./Classes/Manager");
const Engineer = require("./Classes/Engineer");
const Intern = require("./Classes/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const render = require("./Classes/render");

const OutputDIR = path.resolve(__dirname, "Output");
const outputPath = path.join(OutputDIR, "TheTeam.html");
