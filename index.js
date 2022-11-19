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
            name: 'officeNumber',
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
        const teamMember = new Manager(answers.employeeName, answers.id, answers.email, answers.officeNumber);
        team.push(teamMember);
        if (answers.newMember === 'Yes') {
          addMember();
        } else {
            console.log("No new team selected");
            console.log(team);
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
            name: 'github',
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
            const teamMember = new Engineer(answers.employeeName, answers.id, answers.email, answers.github);
            team.push(teamMember);
            if (answers.newMember === 'Yes') {
              addMember();
            } else {
                console.log("No new team selected");
                console.log(team);
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
            name: 'school',
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
            const teamMember = new Intern(answers.employeeName, answers.id, answers.email, answers.school);
            team.push(teamMember);
            if (answers.newMember === 'Yes') {
              addMember();
            } else {
                console.log("No new team selected");
                console.log(team);
            };
            
          }); 
};

init();

