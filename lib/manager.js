//Required parent class constructor
const Employee = require('./employee');

//Manager subclass constructor
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