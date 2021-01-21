const Engineer = require("../Classes/Engineer");

describe("Engineer Class", () => {
  describe("Engineer Constructor", () => {
    it("Should display engineer`s Github", () => {
      const engineer = new Engineer("bob", 21, "bob@bob.com", "BobtheDev");
      expect(engineer.github).toBe("BobtheDev");
    });
  });
  describe("Engineer Function", () => {
    it("Should display engineer`s Github", () => {
      const engineer = new Engineer("bob", 21, "bob@bob.com", "BobtheDev");
      expect(engineer.getGithub()).toEqual("BobtheDev");
    });
    it("Should display engineer`s role", () => {
      const engineer = new Engineer();
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
