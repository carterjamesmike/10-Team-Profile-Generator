//Required jsfile that will be tested. All tests are described next to corresponding test
const Engineer = require('../lib/engineer');

describe("Engineer Methods", () => {
    const testEngineer = new Engineer("Erin Engineer", "B1", "engineer@email.com", "EngGit", "Engineer");

    test("Return Github profile from getGithub method", () => {  
        expect(testEngineer.getGithub()).toEqual("EngGit");
    });

    test("Return role from getRole method", () => {
        expect(testEngineer.getRole()).toEqual("Engineer");
    });
});

describe("Engineer Class Constructor" , () => {
    const testEngineer = new Engineer("Erin Engineer", "B1", "engineer@email.com", "EngGit", "Engineer");

    test("Class properties to match testEmployee", () => {
        expect(testEngineer.employeeName).toEqual("Erin Engineer");
        expect(testEngineer.id).toEqual("B1");
        expect(testEngineer.email).toEqual("engineer@email.com");
        expect(testEngineer.roleChar).toEqual("EngGit")
        expect(testEngineer.role).toEqual("Engineer");
    }); 
});