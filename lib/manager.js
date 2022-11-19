const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber) {
        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "manager"
    };

}

module.exports = Manager;