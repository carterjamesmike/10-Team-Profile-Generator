const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, id, email, github) {
        super(employeeName, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "engineer"
    }
}

module.exports = Engineer;