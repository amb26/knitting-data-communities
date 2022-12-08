/* eslint-env node */
"use strict";

const fs = require("fs-extra");

fs.removeSync("docs");

fs.copySync("src/index.html", "docs/index.html");
fs.copySync("src/img", "docs/img");
