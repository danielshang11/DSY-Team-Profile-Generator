const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("if it's able to set Github through constructor", () => {
    const test = "GitHubUser";
    const a = new Engineer("Daniel", 112233, "Daniel@test.com", test);
    expect(a.github).toEqual(test);
  });

  it("if getRole() will return to \"Engineer\"?", () => {
    const test = "Engineer";
    const a = new Engineer("Daniel", 112233, "Daniel@test.com", "GitHubUser");
    expect(a.getRole()).toEqual(test);
  });

  it("if getGithub() is functional", () => {
    const test = "GitHubUser";
    const a = new Engineer("Daniel", 112233, "Daniel@test.com", test);
    expect(a.getGithub()).toEqual(test);
  });
})