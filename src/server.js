"use strict";
exports.__esModule = true;
var app_1 = require("./app");
require("reflect-metadata");
require("./database");
app_1["default"].listen(3000, function () {
    console.log('🏃 Running Server');
});
