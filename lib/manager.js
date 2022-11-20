const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, id, email, roleChar, role) {
        super(employeeName, id, email);
        this.roleChar = roleChar;
        this.role = "Manager";
    }

    getOFficeNumber() {
        return this.roleChar
    }

    getRole() {
        return "Manager"
    };

}

module.exports = Manager;