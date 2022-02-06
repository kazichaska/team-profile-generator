// const { fstat } = require("fs");
const fs = require("fs");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


function generateEmployee(teamMember) {
  var html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.0/css/bulma.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team-Profile-Generator</title>
    </head>
    <body>
        <div class="hero">
            <div class="hero-body">
              <nav class="nav is-danger center">
                <h1><strong><img src="../src/images/team.svg" height="50" width="50">My Team</strong></h1>
             </nav>
            </div>
              <div class="columns card">
        
    `;
  for ( var i = 0; i < teamMember.length; i++) {
    console.log();
    switch(teamMember[i].constructor.name) {
      case "Manager":
      html += `   <div class="column">
                <div class="notification">
                  <div class="bulma-control-extend"><img src="../src/images/manager.svg" height="50" width="50"><strong>${teamMember[i].constructor.name}</strong></div>
                    <p class="title is-5">Name: ${teamMember[i].name}</p>
                    <p class="title is-5">ID: ${teamMember[i].id}</p>
                    <p class="title is-5">Email: <a href="mailto:${teamMember[i].email}">${teamMember[i].email}</a></p>
                    <p class="title is-5">Office: ${teamMember[i].officeNumber}</p>
                  </div>
                </div>`
      break;
      case "Engineer":
      html += `<div class="column">
                <div class="notification">
                    <div class="bulma-control-extend"><img src="../src/images/engineer.svg" height="50" width="50"><strong>${teamMember[i].constructor.name}</strong></div>
                    <p class="title is-5">Name: ${teamMember[i].name}</p>
                    <p class="title is-5">ID: ${teamMember[i].id}</p>
                    <p class="title is-5">Email: <a href="mailto:${teamMember[i].email}">${teamMember[i].email}</a></p>
                    <p class="title is-5">Github: <a href="https://github.com/${teamMember[i].github}">${teamMember[i].github}</a></p>
                  </div>
                </div>`
      break;
      case "Intern":
      html += `<div class="column">
                <div class="notification">
                    <div class="bulma-control-extend"><img src="../src/images/intern.svg" height="50" width="50"><strong>${teamMember[i].constructor.name}</strong></div>
                    <p class="title is-5">Name: ${teamMember[i].name}</p>
                    <p class="title is-5">ID: ${teamMember[i].id}</p>
                    <p class="title is-5">Email: <a href="mailto:${teamMember[i].email}">${teamMember[i].email}</a></p>
                    <p class="title is-5">School: ${teamMember[i].school}</p>
                  </div>
                </div>`
      break;
      default:
        "none of the options";
    }
  }
  html += `
    </div>
    </div>
    </body>
    <script src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    </html>
  `;
  fs.writeFile("./dist/index.html", html, function(err){
        if (err) return console.log(err);
      });
}


module.exports = generateEmployee;
