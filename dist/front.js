"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
getCounters();
function getCounters() {
    fetch("http://localhost:3005/status", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json)
        .then((res) => {
        let node = document.createElement("p");
        let text = document.createTextNode(`Plus: ${res.Plus}; Minus: ${res.Minus}`);
        node.appendChild(text);
        document.body.appendChild(node);
    });
}
function increment(button) {
    fetch("http://localhost:3005/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ button: (button === "Plus" /* ButtonType.Plus */) ? "Plus" /* ButtonType.Plus */ : "Minus" /* ButtonType.Minus */ })
    })
        .then(res => res.json())
        .then((res) => {
        let node = document.createElement("p");
        let text = document.createTextNode(`Plus: ${res.Plus}; Minus: ${res.Minus}`);
        node.appendChild(text);
        document.body.appendChild(node);
    });
}
