const Employee = require("../lib/Employee");


describe("Employee", () => {
  it("Has to make sure if it's an Object",() => {
    const test = new Employee();
    expect(typeof(test)).toEqual("object");
  });
  it("Make sure if it's able to set name",() => {
    const name = "Daniel";
    const test = new Employee(name);
    expect(test.name).toEqual(name);
  });
  it("to see if we are able to set value",() => {
    const testValue = 100;
    const test = new Employee("Foo", testValue);
    expect(test.id).toEqual(testValue);
  });
  it("to see if we are able to set email",() => {
    const testValue = "test@test.com";
    const test = new Employee("Daniel", 1, testValue);
    expect(test.email).toEqual(testValue);
  });
  it("to see if getName() is functional",() => {
    const testValue = "Daniel";
    const test = new Employee(testValue);
    expect(test.getName()).toEqual(testValue);
  });
  it("to see if getId() is functional",() => {
    const testValue = 100;
    const test = new Employee("Daniel", testValue);
    expect(test.getId()).toEqual(testValue);
  });
  it("to see if getEmail() is functional", () => {
    const testValue = "test@test.com";
    const test = new Employee("Daniel", 1, testValue);
    expect(test.getEmail()).toEqual(testValue);
  });
  it("getRole() will return to \"Employee\"?", () => {
    const testValue = "Employee";
    const test = new Employee("Daniel", 1, "test@test.com");
    expect(test.getRole()).toEqual(testValue);
  });
})





