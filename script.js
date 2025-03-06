let msg1 = "Initialized Hacking now reading your data...";
let msg2 = "Reading your files...";
let msg3 = "Password files Detected...";
let msg4 = "Sending all passwords and personal files to server...";
let msg5 = "Cleaning up...";

let messages = [msg1, msg2, msg3, msg4, msg5];

function addRandomDelay() {
    return Math.floor(Math.random() * 7) + 1;
}

async function displayMessages() {
    for (let index = 0; index < messages.length; index++) {
        const message = messages[index];
        displayMessage(message);
        await new Promise(resolve => setTimeout(resolve, addRandomDelay() * 1000));
    }
}

function displayMessage(message) {
    let prompt = document.querySelector(".prompt");
    prompt.textContent = message;
}

async function main() {
    await displayMessages();
    let prompt = document.querySelector(".prompt");
    prompt.textContent = "SYSTEM HACKED ☠️";
}

main();
