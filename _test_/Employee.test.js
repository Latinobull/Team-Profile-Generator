const Employee = require("../Classes/Employee");

describe("Employee class", () => {
  describe("Constructor test", () => {
    it("Should display correct name for the Employee", () => {
      const employee = new Employee("bob", 21, "bob@bob.com");
      expect(employee.name).toBe("bob");
    });

    it("Should display employee's id number", () => {
      const employee = new Employee("bob", 21, "bob@bob.com");
      expect(employee.id).toBe(21);
    });

    it("Should display employee's email", () => {
      const employee = new Employee("bob", 21, "bob@bob.com");
      expect(employee.email).toBe("bob@bob.com");
    });
  });

  describe("Function test", () => {
    it("Should display name when function is called", () => {
      const employee = new Employee("bob", 21, "bob@bob.com");
      expect(employee.getName()).toEqual("bob");
    });

    it("Should display id when function is called", () => {
      const employee = new Employee("bob", 21, "bob@bob.com");
      expect(employee.getId()).toEqual(21);
    });

    it("Should display email when function is called", () => {
      const employee = new Employee("bob", 21, "bob@bob.com");
      expect(employee.getEmail()).toEqual("bob@bob.com");
    });
  });
});
