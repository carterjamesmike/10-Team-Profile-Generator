//Required parent class constructor directory
const Employee = require('./employee');

//Engineer subclass constructor
class Engineer extends Employee {
    constructor(employeeName, id, email, roleChar, role) {
        super(employeeName, id, email);
        this.roleChar = roleChar;
        this.role = "Engineer";
    }

    getGithub() {
        return this.roleChar;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;