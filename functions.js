function writeLine(text, speed = 30) {
  return new Promise(async (done) => {
    let div = document.createElement("div");
    document.getElementById("out").appendChild(div);
    for (let c of ">" + text) {
      div.textContent += c;
      await new Promise((r) => setTimeout(r, speed));
    }
    done();
  });
}

async function loadingPercent(prompt, speed) {
  let line = document.createElement("div");
  document.getElementById("out").appendChild(line);

  for (let i = 1; i <= 100; i++) {
    line.textContent = prompt + i + "%";
    await new Promise((r) => setTimeout(r, speed));
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function promptPassword(promptText, callback) {
  let line = document.createElement("div");
  line.className = "prompt-line";

  let label = document.createElement("span");
  label.textContent = promptText + " ";
  label.classList.add("terminal-line-cursor-effect");
  line.appendChild(label);

  let input = document.createElement("input");
  input.type = "password";
  line.appendChild(input);

  document.getElementById("out").appendChild(line);

  input.focus();

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      callback(input.value);
    }
  });
}
s;

function clear() {
  document.getElementById("out").innerHTML = "";
}

function prompt(callback) {
  let line = document.createElement("div");
  document.getElementById("out").appendChild(line);

  let input = document.createElement("input");
  input.classList.add("terminal-input");

  line.appendChild(input);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      callback(input.value);
    }
  });
}
