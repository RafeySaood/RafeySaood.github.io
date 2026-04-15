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
/* 🌙 Dark/Light Mode */
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

/* 📝 To-Do List with Local Storage */
function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (!task) return;

    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => li.remove();

    document.getElementById("taskList").appendChild(li);
    saveTasks();
    input.value = "";
}

function saveTasks() {
    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );
}

function loadTasks() {
    document.getElementById("taskList").innerHTML =
        localStorage.getItem("tasks") || "";
}

window.onload = loadTasks;

/* 🧮 GPA Calculator */
function calculateGPA() {
    let g1 = Number(document.getElementById("grade1").value) || 0;
    let g2 = Number(document.getElementById("grade2").value) || 0;
    let g3 = Number(document.getElementById("grade3").value) || 0;

    let gpa = (g1 + g2 + g3) / 3;
    document.getElementById("gpaResult").textContent =
        "Your GPA: " + gpa.toFixed(2);
}

/* 📊 Percentage Calculator */
function calculatePercentage() {
    let obtained = document.getElementById("marksObtained").value;
    let total = document.getElementById("totalMarks").value;

    if (obtained && total) {
        let percentage = (obtained / total) * 100;
        document.getElementById("percentageResult").textContent =
            "Percentage: " + percentage.toFixed(2) + "%";
    }
}

/* 🔢 Unit Converter */
function convertUnits() {
    let meters = document.getElementById("meters").value;
    let km = meters / 1000;
    let feet = meters * 3.28084;

    document.getElementById("conversionResult").textContent =
        `${meters} meters = ${km.toFixed(2)} km = ${feet.toFixed(2)} feet`;
}

/* ⏱️ Pomodoro Timer */
let time = 1500;
let timerInterval;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    document.getElementById("timer").textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            alert("Time's up! Take a break.");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    time = 1500;
    updateDisplay();
}

/* 🔤 Word Counter */
document.addEventListener("input", function () {
    let text = document.getElementById("textInput").value;
    let words = text.trim() ? text.trim().split(/\s+/).length : 0;
    let characters = text.length;
    let readingTime = Math.ceil(words / 200);

    document.getElementById("wordCount").textContent =
        `Words: ${words} | Characters: ${characters} | Reading Time: ${readingTime} min`;
});
