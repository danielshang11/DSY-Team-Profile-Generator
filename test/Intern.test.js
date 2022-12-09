const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("if it's able to set school through constructor", () => {
    const test = "UCI";
    const a = new Intern("Daniel", 11223344, "Daniel@test.com", test);
    expect(a.school).toEqual(test);
  });

  it("if getRole() method is able to return \"Intern\"?", () => {
    const test = "Intern";
    const a = new Intern("Daniel", 11223344, "Daniel@test.com", "UCLA");
    expect(a.getRole()).toEqual(test);
  });

  it("if getSchool() method is worked?", () => {
    const test = "UCI";
    const a = new Intern("Daniel", 11223344, "Daniel@test.com", test);
    expect(a.getSchool()).toEqual(test);
  });
})