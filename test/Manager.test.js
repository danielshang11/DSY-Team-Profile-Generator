const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

describe("Manager", () => {
  it("if it's able to set office number through constructor argument", () => {
    const test = 1000;
    const a = new Manager("Daniel", 1597534682, "Daniel@test.com", test);
    expect(a.officeNumber).toBe(test);
  });

  it("if getRole() can return \"Manager\"?", () => {
    const test = "Manager";
    const a = new Manager("Daniel", 1597534682, "Daniel@test.com", 1000);
    expect(a.getRole()).toBe(test);
  });

  it("if getOffice() method could grab officenumber", () => {
    const test = 1000;
    const a = new Manager("Daniel", 1597534682, "Daniel@test.com", test);
    expect(a.getOfficeNumber()).toBe(test);
  });
})
