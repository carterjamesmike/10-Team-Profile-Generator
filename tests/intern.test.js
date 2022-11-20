const Intern = require('../lib/intern');

describe("Intern Methods", () => {
    const testIntern = new Intern("Ira Intern", "C1", "intern@email.com", "Crazy Go Nuts University", "Intern");

    test("Return school from getSchool method", () => {
        expect(testIntern.getSchool()).toEqual("Crazy Go Nuts University");
    });

    test("Return role from getRole method", () => {
        expect(testIntern.getRole()).toEqual('Intern')
    });
});

describe("Intern Class Constructor" , () => {
    const testIntern = new Intern("Ira Intern", "C1", "intern@email.com", "Crazy Go Nuts University", "Intern");

    test("Class properties to match testEmployee", () => {
        expect(testIntern.employeeName).toEqual("Ira Intern");
        expect(testIntern.id).toEqual("C1");
        expect(testIntern.email).toEqual("intern@email.com");
        expect(testIntern.roleChar).toEqual("Crazy Go Nuts University")
        expect(testIntern.role).toEqual("Intern");
    }); 
});