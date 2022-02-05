// all packages need for this application
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./dist/generateHTML.js");
const path = require("path");
const teamMember = [];
const id = [];

function startProgram() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          massage: "What is manager's name?",
          validate: (response) => {
              if ((response = "")) {
                return "Manager's name is required";
              } else {
                return true;
              }
          }
        },
        {
          type: "input",
          name: "officeNumber",
          massage: "Enter the Office Number:",
          validate: (response) => {
            const office = response.match(/^[1-9]\d*$/);
            if (office) {
              return true;
            } else {
              return "Please enter valid number";
            }
          },
        },
        {
          type: "input",
          name: "managerId",
          massage: "Enter the ID of the manager:",
          validate: (response) => {
            const id = response.match(/^[1-9]\d*$/);
            if (id) {
              return true;
            } else {
              return "Please enter valid ID";
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          massage: "Enter email address:",
          validate: (response) => {
            const email = response.match(/\S+@\S+\.\S+/);
            if (email) {
              return true;
            } else {
              return "Please enter valid email address";
            }
          },
        },
      ])
      .then((responses) => {
        const manager = new Manager(
          responses.managerName,
          responses.officeNumber,
          responses.managerId,
          responses.managerEmail
        );
        teamMember.push(manager);
        id.push(responses.managerId);
        addMembers();
      });
  };

  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          massage: "What is engineer's name?",
          validate: (response) => {
            if ((response = "")) {
              return "Enginner's name is required";
            } else {
              return true;
            }
          }
        },
        {
          type: "input",
          name: "engineerId",
          massage: "Enter the ID of the engineer:",
          validate: (response) => {
            const id = response.match(/^[1-9]\d*$/);
            if (id) {
              return true;
            } else {
              return "Please enter valid ID";
            }
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          massage: "Enter email address:",
          validate: (response) => {
            const email = response.match(/\S+@\S+\.\S+/);
            if (email) {
              return true;
            } else {
              return "Please enter valid email address";
            }
          },
        },
        {
          type: "input",
          name: "githubUserName",
          message: "Please enter Github username:",
        },
      ])
      .then((responses) => {
        const engineer = new Engineer(
          responses.engineerName,
          responses.engineerId,
          responses.engineerEmail,
          responses.githubUserName
        );
        teamMember.push(engineer);
        id.push(responses.engineerId);
        addMembers();
      });
  };

  function createIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: (response) => {
          if ((response = "")) {
            return "Intern's name is required";
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Enter the ID of the Intern",
        validate: (response) => {
          const id = response.match(/^[1-9]\d*$/);
          if (id) {
            return true;
          } else {
            return "Please enter valid ID";
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter email address:",
        validate: (response) => {
          const email = response.match(/\S+@\S+\.\S+/);
          if (email) {
            return true;
          } else {
            return "Please enter valid email address";
          }
        },
      },
      {
        type: "input",
        name: "schoolName",
        message: "Please enter the school name",
      },
    ])
    .then((responses) => {
      const intern = new Intern(
        responses.internName,
        responses.internId,
        responses.internEmail,
        responses.schoolName
      );
      teamMember.push(intern);
      id.push(responses.internId);
      addMembers();
    });
  };

  function addMembers() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamChoice",
          massage: "What team member would you like to add?",
          choices: ["Engineer", "Intern", "No_More_Team_Member"],
        },
      ])
      .then((choices) => {
        switch (choices.teamChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            buildTeam();
        }
      });
  };
};

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), "src", fileName), data);
};

// function init() {
//   inquirer.prompt(questions).then((returnedData) => {
//     writeToFile("index.html", generateHTML({ ...returnedData }));
//   });
// }

// function call to initialize app
startProgram();

