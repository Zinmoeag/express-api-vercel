"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const controller = (req, res, next) => {
    res.send("Express on Vercel");
};
app.get("/", controller);
app.listen(3000, () => console.log("Server ready on port 3000."));
exports.default = app;
