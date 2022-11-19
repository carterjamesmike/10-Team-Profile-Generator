const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeName, id, email, school) {
        super(employeeName, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    };
    getRole() {
        return "intern"
    };
}

module.exports = Intern;