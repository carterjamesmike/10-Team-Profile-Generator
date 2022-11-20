const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, id, email, roleChar, role) {
        super(employeeName, id, email);
        this.roleChar = roleChar;
        this.role = "Manager";
    }

    getRole() {
        return "manager"
    };

}

module.exports = Manager;