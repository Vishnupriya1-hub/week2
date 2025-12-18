const countEl = document.getElementById("count");
const statusEl = document.getElementById("status");

const incBtn = document.querySelector("#inc");
const decBtn = document.querySelector("#dec");
const resetBtn = document.querySelector("#reset");

let count = 0;

function updateStatus() {
    if (count > 0) {
        statusEl.innerText = "Counter is Positive";
    } else if (count < 0) {
        statusEl.innerText = "Counter is Negative";
    } else {
        statusEl.innerText = "Counter is Neutral";
    }
}


incBtn.addEventListener("click", () => {
    count++;
    countEl.innerText = count;
    updateStatus();
});


decBtn.addEventListener("click", () => {
    count--;
    countEl.innerText = count;
    updateStatus();
});


resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.innerText = count;
    updateStatus();
});
