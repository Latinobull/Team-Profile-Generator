const Intern = require("../Classes/Intern");

describe("Intern Class", () => {
  describe("Intern Constructor", () => {
    it("Should show intern`s School", () => {
      const intern = new Intern("bob", 21, "bob@bob.com", "Bob Academy");
      expect(intern.school).toBe("Bob Academy");
    });
  });
  describe("Intern Function", () => {
    it("Should show intern`s school ", () => {
      const intern = new Intern("bob", 21, "bob@bob.com", "Bob Academy");
      expect(intern.getSchool()).toEqual("Bob Academy");
    });

    it("Should show intern`s role as intern", () => {
      const intern = new Intern();
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
