//Required jsfile that will be tested. All tests are described next to corresponding test
const Manager = require('../lib/manager');

describe("Manager Methods", () => {
    const testManager = new Manager("Manny Manager", "A1", "manager@email.com", 101, "Manager");

    test("Return office number from getOfficeNumber method", () => {
        expect(testManager.getOFficeNumber()).toEqual(101);
    });

    test("Return role from getRole method", () => {
        expect(testManager.getRole()).toEqual("Manager")
    });
});

describe("Manager Class Constructor" , () => {
    const testManager = new Manager("Manny Manager", "A1", "manager@email.com", 101, "Manager");

    test("Class properties to match testEmployee", () => {
        expect(testManager.employeeName).toEqual("Manny Manager");
        expect(testManager.id).toEqual("A1");
        expect(testManager.email).toEqual("manager@email.com");
        expect(testManager.roleChar).toEqual(101)
        expect(testManager.role).toEqual("Manager");
    }); 
});