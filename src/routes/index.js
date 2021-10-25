"use strict";
exports.__esModule = true;
var express_1 = require("express");
var class_routes_1 = require("./class.routes");
var routes = (0, express_1.Router)();
routes.use('/class', class_routes_1["default"]);
exports["default"] = routes;
