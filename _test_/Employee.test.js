const Employee = require("../Classes/Employee");

describe("Employee class", () => {
  it("Should display correct name for the Employee", () => {
    const employee = new Employee("bob", 21, "bob@bob.com");
    expect(employee.name).toBe("bob");
  });
});
