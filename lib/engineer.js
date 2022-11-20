const Employee = require('./employee');

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