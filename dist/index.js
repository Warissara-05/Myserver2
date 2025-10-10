"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import userRoutes from "./UserRoutes";
const path_1 = __importDefault(require("path"));
const app = Express();
const mongoURI = "mongodb+srv://test:200548@test.iiwofpo.mongodb.net/?retryWrites=true&w=majority&appName=test";
app.use(Express.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to MongoDB", err);
});
app.use(Express.static(path_1.default.join(__dirname, 'public')));
const port = 3000;
// app.use("/api", userRoutes);
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
