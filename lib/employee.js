class Employee {
  constructor(employeeName, id, email, role) {
    this.employeeName = employeeName;
    this.id =  id;
    this.email = email;
    this.role = "Employee";
  }
  
  getName() {
    return this.employeeName
  };

  getId() {
    return this.id
  };

  getEmail() {
    return this.email;
  };

  getRole() {
    return "Employee";
  }
    //printInfo() {}
  }
  
  module.exports = Employee;

