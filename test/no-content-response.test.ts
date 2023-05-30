import { HttpNoContentResponse } from "../src";

describe("HttpNoContentResponse", () => {
  const noContent = new HttpNoContentResponse();

  test("status is correct", () => {
    expect(noContent.status).toEqual(204);
    expect(noContent.statusText).toEqual("No Content");
    expect(() => new HttpNoContentResponse({ status: 0 })).toThrow();
    expect(() => new HttpNoContentResponse({ statusText: "" })).toThrow();
  });
  test("content-type is null", () => {
    expect(noContent.headers.get("content-type")).toEqual(null);
  });
  test("content-length is 0", () => {
    expect(noContent.headers.get("content-length")).toEqual("0");
  });
});
