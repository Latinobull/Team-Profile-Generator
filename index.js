const Manager = require("./Classes/Manager");
const Engineer = require("./Classes/Engineer");
const Intern = require("./Classes/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const render = require("./Classes/render");

const OutputDIR = path.resolve(__dirname, "Output");
const outputPath = path.join(OutputDIR, "TheTeam.html");

const team = [];
function manager() {
  inquirer
    .prompt([
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
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNum
      );
      team.push(newManager);
      addEmployee();
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you have any more employees?",
        choices: ["engineer", "intern", "No more employees"],
        name: "employee",
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.employee === "engineer") {
        console.log("------Insert your engineer`s information------");
        addEngineer();
      } else if (answers.employee === "intern") {
        console.log("------Insert your intern`s information------");
        addIntern();
      } else {
        completeFile();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the Engineer?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
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
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.push(newEngineer);
      console.log(team);
      addEmployee();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the Intern?",
        name: "name",
      },
      {
        type: "input",
        message: "What school do you attend?",
        name: "school",
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
    ])
    .then((answers) => {
      const newIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.push(newIntern);
      console.log(team);
      addEmployee();
    });
}

function completeFile() {
  const newHtml = render(team, "My Team");

  fs.writeFile(outputPath, newHtml, (err) => {
    if (err) throw err;

    console.log("file has been created");
  });
}

manager();
