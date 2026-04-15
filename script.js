// Percentage Calculator
function calculatePercentage() {
    let obtained = document.getElementById("marksObtained").value;
    let total = document.getElementById("totalMarks").value;

    if (obtained && total) {
        let percentage = (obtained / total) * 100;
        document.getElementById("percentageResult").textContent =
            "Percentage: " + percentage.toFixed(2) + "%";
    }
}

// To-Do List
function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

// Pomodoro Timer
let time = 1500;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").textContent =
            `${minutes}:${seconds.toString().padStart(2, "0")}`;

        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Take a break.");
        }
        time--;
    }, 1000);
}

// Word Counter
document.addEventListener("input", function () {
    let text = document.getElementById("textInput").value;
    let words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    let characters = text.length;

    document.getElementById("wordCount").textContent =
        `Words: ${words} | Characters: ${characters}`;
});
