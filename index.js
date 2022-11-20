const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const parse = require('node-html-parser').parse;

const team = [];

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
            //console.log(team);
            generateCards();
        };
        
      }); 
};

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

function generateCards() {
    fs.readFile('./dist/index.html', 'utf8', (err,html)=>{
        if(err){
           throw err;
        }
     
        const root = parse(html);
        const body = root.querySelector('main');
 
        body.appendChild(
            `<div class="card">
                <div class="container">
                    <h4 class="title"><b>${team[0].name}</b></h4>
                    <h4 class="title"><b>Manager</b></h4>
                    <ul>
                        <li>ID: ${team[0].id}</li>
                        <li>Email: ${team[0].email}</li>
                        <li>Office Number: ${team[0].roleChar}</li>
                    </ul>
                </div>
            </div>`
        );
     
        for (let i = 1; i < team.length; i++) {
            if (team[i].role === "Engineer") {
                body.appendChild(
                    `<div class="card">
                        <div class="container">
                            <h4 class="title"><b>${team[i].name}</b></h4>
                            <h4 class="title"><b>Engineer</b></h4>
                            <ul>
                                <li>ID: ${team[i].id}</li>
                                <li>Email: ${team[i].email}</li>
                                <li>Github ${team[i].roleChar}</li>
                            </ul>
                        </div>
                    </div>`
                );
            } else {
                body.appendChild(
                    `<div class="card">
                        <div class="container">
                            <h4 class="title"><b>${team[i].name}</b></h4>
                            <h4 class="title"><b>Intern</b></h4>
                            <ul>
                                <li>ID: ${team[i].id}</li>
                                <li>Email: ${team[i].email}</li>
                                <li>School: ${team[i].roleChar}</li>
                            </ul>
                        </div>
                    </div>`
                );
            }
        }

      });
}

init();

