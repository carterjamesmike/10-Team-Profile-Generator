//Required jsfile that will be tested. All tests are described next to corresponding test
const Employee = require('../lib/employee')

describe("Employee Methods", () => {
    const testEmployee = new Employee("Esther Employee", "D1", "employee@email.com", "Employee");

    test("Return name from getName method", () => {
        expect(testEmployee.getName()).toEqual("Esther Employee");
    });

    test("Return id from getID method", () => {
        expect(testEmployee.getId()).toEqual("D1");
    });

    test("Return email form getEmail method", () => {
        expect(testEmployee.getEmail()).toEqual("employee@email.com");
    });

    test("Return role from getRole method", () => {
        expect(testEmployee.getRole()).toEqual("Employee")
    });
});

describe("Employee Class Constructor" , () => {
    const testEmployee = new Employee("Esther Employee", "D1", "employee@email.com", "Employee");

    test("Properties to match testEmployee", () => {
        expect(testEmployee.employeeName).toEqual("Esther Employee");
        expect(testEmployee.id).toEqual("D1");
        expect(testEmployee.email).toEqual("employee@email.com");
        expect(testEmployee.role).toEqual("Employee");
    }); 
});