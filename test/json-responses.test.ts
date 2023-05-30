import * as responses from "../src/json-responses";

describe("Response content type is 'application/json'", () => {
  for (const [name, response] of Object.entries(responses)) {
    test(name, () => {
      expect(new response().headers.get("content-type")).toEqual("application/json");
    });
  }
});

describe("Response content type is not overridable", () => {
  for (const [name, response] of Object.entries(responses)) {
    test(name, () => {
      expect(
        () => new response("", { headers: { "content-type": "text/html" } }),
      ).toThrow();
    });
  }
});

describe("Response status is not overridable", () => {
  for (const [name, response] of Object.entries(responses)) {
    test(name, () => {
      expect(() => new response("", { status: 0 })).toThrow();
      expect(() => new response("", { statusText: "" })).toThrow();
    });
  }
});
