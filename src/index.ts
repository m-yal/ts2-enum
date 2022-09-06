import express from 'express';
import path from 'path';
import { ButtonType } from './types';

const app = express();

enum CounterUnit {}
let plusCounter: Object[] = [];
let minusCounter: Object[] = [];

app.use(express.json());
app.use(express.static('dist/index.html'));

app.get("/status", (req, res) => {
    enum Status {
        Plus = plusCounter.length,
        Minus = minusCounter.length
    }
    res.send(JSON.stringify(Status));
});
app.post("/", (req, res) => {
    if (req.body.button === ButtonType.Plus) {
        plusCounter.push(CounterUnit);
    } else if (req.body.button === ButtonType.Minus) {
        minusCounter.push(CounterUnit);
    }
    enum Status {
        Plus = plusCounter.length,
        Minus = minusCounter.length
    }
    res.send(JSON.stringify(Status));
})
app.get("/front.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front.js"));
})
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../src", "index.html"));
});

app.listen(3005, () => console.log(`Server has been started on port 3005`));