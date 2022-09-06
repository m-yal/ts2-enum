"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
var CounterUnit;
(function (CounterUnit) {
})(CounterUnit || (CounterUnit = {}));
let plusCounter = [];
let minusCounter = [];
app.use(express_1.default.json());
app.use(express_1.default.static('dist/index.html'));
app.get("/status", (req, res) => {
    let Status;
    (function (Status) {
        Status[Status["Plus"] = plusCounter.length] = "Plus";
        Status[Status["Minus"] = minusCounter.length] = "Minus";
    })(Status || (Status = {}));
    res.send(JSON.stringify(Status));
});
app.post("/", (req, res) => {
    if (req.body.button === "Plus" /* ButtonType.Plus */) {
        plusCounter.push(CounterUnit);
    }
    else if (req.body.button === "Minus" /* ButtonType.Minus */) {
        minusCounter.push(CounterUnit);
    }
    let Status;
    (function (Status) {
        Status[Status["Plus"] = plusCounter.length] = "Plus";
        Status[Status["Minus"] = minusCounter.length] = "Minus";
    })(Status || (Status = {}));
    res.send(JSON.stringify(Status));
});
app.get("/front.js", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "front.js"));
});
app.get("/", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../src", "index.html"));
});
app.listen(3005, () => console.log(`Server has been started on port 3005`));
