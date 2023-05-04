const closeOptionalTags = require("./index");

describe("closeOptionalTags", () => {
  it("returns a string", () => {
    expect(typeof closeOptionalTags("<div>Hello world</div>")).toBe("string");
  });

  it("returns the original HTML if there are no optional tags that need to be closed", () => {
    const originalHtml = "<div>Hello world</div>";
    expect(closeOptionalTags(originalHtml)).toBe(originalHtml);
  });

  it("closes one or more optional tags", () => {
    const originalHtml = "<img><br><hr><input>";
    const expectedHtml = "<img/><br/><hr/><input/>";
    expect(closeOptionalTags(originalHtml)).toBe(expectedHtml);
  });

  it("correctly handles attributes on optional tags", () => {
    const originalHtml = '<a href="#" target="_blank"></a>';
    const expectedHtml = '<a href="#" target="_blank"></a>';
    expect(closeOptionalTags(originalHtml)).toBe(expectedHtml);
  });

  it("correctly handles self-closing optional tags", () => {
    const originalHtml = "<img><br><hr><input><source>";
    const expectedHtml = "<img/><br/><hr/><input/><source/>";
    expect(closeOptionalTags(originalHtml)).toBe(expectedHtml);
  });

  it("correctly handles nested optional tags", () => {
    const originalHtml = "<div><span><img></span></div>";
    const expectedHtml = "<div><span><img/></span></div>";
    expect(closeOptionalTags(originalHtml)).toBe(expectedHtml);
  });

  it("correctly handles optional tags with no attributes", () => {
    const originalHtml = "<link><meta><base><col><param>";
    const expectedHtml = "<link/><meta/><base/><col/><param/>";
    expect(closeOptionalTags(originalHtml)).toBe(expectedHtml);
  });
});
