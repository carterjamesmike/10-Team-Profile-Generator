//Required packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Array that houses the user inputed team
const team = [];

//Prompts for manager input, constructs team member, saves team member into team[], asks user if there are more team members to add. 
function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
        },
        {
            type: 'input',
            name: 'roleChar',
            message: "What is the manager's office number?",
        },
        {
            type: 'list',
            name: 'newMember',
            message: "Would you like to add a new team member?",
            choices: ['Yes', 'No']
        },
        ])
    .then((answers) => {
        const teamMember = new Manager(answers.employeeName, answers.id, answers.email, answers.roleChar, answers.role);
        team.push(teamMember);
        if (answers.newMember === 'Yes') {
          addMember();
        } else {
            console.log("No new team selected");
            generateCards();
        };
      }); 
};

//Asks user what the position of new team member is then calls on function for that team member prompts
function addMember (){
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'memberType',
                message: "What is the position of this team member?",
                choices: ['Engineer', 'Intern']
            }
        ])
    .then((answers) => {
        if (answers.memberType === 'Engineer') {
            newEngineer();
        } else {
            newIntern();
        }
         })
};

//Prompts for engineer input, constructs team member, saves team member into team[], asks user if there are more team members to add 
function newEngineer() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'roleChar',
            message: "What is the engineer's github username?",
        },
        {
            type: 'list',
            name: 'newMember',
            message: "Would you like to add a new team member?",
            choices: ['Yes', 'No']
        },
        ])
        .then((answers) => {
            const teamMember = new Engineer(answers.employeeName, answers.id, answers.email, answers.roleChar, answers.role);
            team.push(teamMember);
            if (answers.newMember === 'Yes') {
              addMember();
            } else {
                console.log("No new team selected");
                generateCards();
            };
            
          }); 
};

//Prompts for intern input, constructs team member, saves team member into team[], asks user if there are more team members to add 
function newIntern() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'roleChar',
            message: "What is the intern's school?",
        },
        {
            type: 'list',
            name: 'newMember',
            message: "Would you like to add a new team member?",
            choices: ['Yes', 'No']
        },
        ])
        .then((answers) => {
            const teamMember = new Intern(answers.employeeName, answers.id, answers.email, answers.roleChar, answers.role);
            team.push(teamMember);
            if (answers.newMember === 'Yes') {
              addMember();
            } else {
                console.log("No new team selected");
                //console.log(team);
                generateCards();
            };
            
          }); 
};

//Generates HTML cards from user inputs and adds HTML to an array to be called later
function generateCards() {
    const divEls = [];
    let roleCard =             
        `<div class="card">
            <div class="container">
                <h4 class="title"><b>${team[0].employeeName}</b></h4>
                <h4 class="title"><b>Manager</b></h4>
                <ul>
                    <li>ID: ${team[0].id}</li>
                    <li>Email:<a href = "mailto: ${team[0].email}">${team[0].email}</a></li>
                    <li>Office Number: ${team[0].roleChar}</li>
                </ul>
            </div>
        </div>`;
    divEls.push(roleCard);
  
  
    for (let i = 1; i < team.length; i++) {
        if (team[i].role === "Engineer") {
            let roleCard =             
                `<div class="card">
                    <div class="container">
                        <h4 class="title"><b>${team[i].employeeName}</b></h4>
                        <h4 class="title"><b>Engineer</b></h4>
                        <ul>
                            <li>ID: ${team[i].id}</li>
                            <li>Email:<a href = "mailto: ${team[i].email}">${team[i].email}</a></li>
                            <li>Github: <a href="https://www.github.com/${team[i].roleChar}">${team[i].roleChar}</a></li>
                        </ul>
                    </div>
                </div>`;
            divEls.push(roleCard);
        } else {
            let roleCard = 
                `<div class="card">
                    <div class="container">
                        <h4 class="title"><b>${team[i].employeeName}</b></h4>
                        <h4 class="title"><b>Intern</b></h4>
                            <ul>
                                <li>ID: ${team[i].id}</li>
                                <li>Email:<a href = "mailto: ${team[i].email}">${team[i].email}</a></li>
                                <li>School: ${team[i].roleChar}</li>
                            </ul>
                    </div>
                </div>`;
            divEls.push(roleCard)
        }
    }
  
    writeHTML(divEls)
}

//Reads template HTML file and writes new index.html.
function writeHTML(divEls) {
    var divElsJoin = divEls.join("");
    
    //Reads/copies data from template.html file
    fs.readFile('./src/template.html', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        //Adds HMTL cards from generateCards() and adds them inbetween the <main> element tags, then writes new file into index.html
        data = data.replace(/\<\/main>/g, divElsJoin + '</main>');
        fs.writeFile('./dist/index.html', data, function (err) {
            if (err) throw err;
        console.log("Success");
        })
    })
  
  }

//Call init() that initiates the program  
init();