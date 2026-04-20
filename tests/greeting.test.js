const { getGreeting } = require("../script");

// Greeting returns expected result
test("returns correct greeting", () => {
  expect(getGreeting("John")).toBe("Hello John");
});

// Able to add number
test("works with numbers as input", () => {
  expect(getGreeting("123")).toBe("Hello 123");
});