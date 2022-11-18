const inquirer = require('inquirer');
const fs = require('fs');

function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the manager's id?",
        },
        {
            type: 'input',
            name: 'managerEmail',
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
        if (answers.newMember === 'Yes') {
          addMember();
        } else {
            console.log("Fail")
        };
        console.log(answers)
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
            name: 'EngineerName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'EngineerIid',
            message: "What is the engineer's id?",
        },
        {
            type: 'input',
            name: 'EngineerEmail',
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
            if (answers.newMember === 'Yes') {
              addMember();
            } else {
                console.log("Fail")
            };
            console.log(answers)
          }); 
};

function newIntern() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id?",
        },
        {
            type: 'input',
            name: 'internEmail',
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
            if (answers.newMember === 'Yes') {
              addMember();
            } else {
                console.log("Fail")
            };
            console.log(answers)
          }); 
};

init();