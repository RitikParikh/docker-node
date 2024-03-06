"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
app.get("/", (req, res) => {
    res.json({ message: "Hello from express server" });
});
app.get("/health", (req, res) => {
    res.json({ message: "Everyting is Healthy" });
});
app.listen(PORT, () => { console.log(`Express Application started on port ${PORT}`); });
