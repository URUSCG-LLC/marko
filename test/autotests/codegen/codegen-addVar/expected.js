"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename);

function render(input, out) {
  var data = input;

  var foo = "Hello World";

  out.w("<div></div>");
}

marko_template._ = render;

marko_template.meta = {};
