const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName, id, email, roleChar, role) {
        super(employeeName, id, email);
        this.roleChar = roleChar;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    };
    getRole() {
        return "intern"
    };
}

module.exports = Intern;