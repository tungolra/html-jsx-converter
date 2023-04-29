const htmlparser2 = require("htmlparser2");

function closeOptionalTags(html) {
  const stack = [];
  const parser = new htmlparser2.Parser(
    {
      onopentag(name, attributes) {
        stack.push(name);
      },
    },
    { decodeEntities: true }
  );
  parser.write(html);
  parser.end();

  let result = html;
  stack.forEach((tag) => {
    if (
      [
        "area",
        "base",
        "br",
        "col",
        "command",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr",
      ].includes(tag)
    ) {
      const regex = new RegExp(`<${tag}([^>]*)>`, "g");
      result = result.replace(regex, `<${tag}$1/>`);
    }
  });
  return result;
}

module.exports = closeOptionalTags;
