import { ButtonType } from "./types"

getCounters();

function getCounters() {
    fetch("http://localhost:3005/status", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json)
        .then((res: any) => {
            let node = document.createElement("p");
            let text = document.createTextNode(`Plus: ${res.Plus}; Minus: ${res.Minus}`);
            node.appendChild(text);
            document.body.appendChild(node);
        })
}

function increment(button: ButtonType.Minus | ButtonType.Plus): void {
    fetch("http://localhost:3005/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({button: (button === ButtonType.Plus) ? ButtonType.Plus : ButtonType.Minus})
    })
        .then(res => res.json())
        .then((res: any) => {
            let node = document.createElement("p");
            let text = document.createTextNode(`Plus: ${res.Plus}; Minus: ${res.Minus}`);
            node.appendChild(text);
            document.body.appendChild(node);
        })
}