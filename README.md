# Convert HTML to JSX

This npm package provides a function that can be used to convert an HTML string to valid JSX by closing any optional tags that are valid in HTML. This can be useful when working with HTML content in a React application.

### Installation
You can install this package using npm:

<code>npm install close-optional-tags</code>

### Usage
To use the closeOptionalTags function, import it into your JavaScript file:

<code>const closeOptionalTags = require("close-optional-tags");</code>
You can then call the function with an HTML string as the argument:

<code>const html = `<p>Hello, world!</p>`
const jsx = closeOptionalTags(html);
console.log(jsx);</code>
// Output: 
`<p>Hello, world!</p>`

The function will return the HTML string converted to valid JSX, with any optional tags closed:


<code>const html = `<img src='example.jpg'>`;
const jsx = closeOptionalTags(html);
console.log(jsx);</code>
// Output:
 `<img src='example.jpg'/>`

### License
This package is licensed under the MIT license.

### Repo
https://github.com/tungolra/html-jsx-converter
