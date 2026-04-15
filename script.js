// 🌙 Dark/Light Mode
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
    li.onclick = () => {
        li.remove();
        saveTasks();
    };

    document.getElementById("taskList").appendChild(li);
    input.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem(
        "tasks",
        document.getElementById("taskList").innerHTML
    );
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        document.getElementById("taskList").innerHTML = saved;
    }
}

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
        `${meters} m = ${km.toFixed(2)} km = ${feet.toFixed(2)} ft`;
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

/* 📓 Digital Notes */
function saveNotes() {
    const notes = document.getElementById("notes").value;
    localStorage.setItem("notes", notes);
    document.getElementById("notesStatus").textContent = "Notes saved!";
}

function loadNotes() {
    const saved = localStorage.getItem("notes");
    if (saved) {
        document.getElementById("notes").value = saved;
    }
}

/* 🧠 Flashcards */
function addFlashcard() {
    const q = document.getElementById("question").value;
    const a = document.getElementById("answer").value;
    if (!q || !a) return;

    const card = document.createElement("div");
    card.className = "flashcard";
    card.innerHTML = `<strong>${q}</strong><p>${a}</p>`;
    document.getElementById("flashcards").appendChild(card);
}

/* 📅 Study Planner */
function addStudyTask() {
    const task = document.getElementById("studyTask").value;
    if (!task) return;

    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("studyList").appendChild(li);
}

/* ⏳ Exam Countdown */
function calculateCountdown() {
    const examDate = new Date(
        document.getElementById("examDate").value
    );
    const today = new Date();
    const diff = examDate - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    document.getElementById("countdownResult").textContent =
        `Days Remaining: ${days}`;
}

/* Load Stored Data */
window.onload = function () {
    loadTasks();
    loadNotes();
    updateDisplay();
};

/* 🔎 Search Tools */
function searchTools() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let sections = document.querySelectorAll(".card");

    sections.forEach(section => {
        let text = section.innerText.toLowerCase();
        section.style.display = text.includes(input) ? "block" : "none";
    });
}

/* 💬 Motivational Quotes */
const quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Dream big, work hard, stay focused.",
    "Believe you can and you're halfway there.",
    "Push yourself because no one else will do it for you.",
    "Great things never come from comfort zones.",
    "Discipline is the bridge between goals and accomplishment."
];

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

/* 📄 Export Notes as PDF */
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const notes = document.getElementById("notes").value;

    doc.text(notes || "No notes available.", 10, 10);
    doc.save("Student_Notes.pdf");
}

/* 📊 Progress Tracker */
let progress = 0;

function updateProgress() {
    if (progress < 100) {
        progress += 10;
        document.getElementById("progressBar").value = progress;
        document.getElementById("progressText").textContent = progress + "%";
        localStorage.setItem("progress", progress);
    }
}

function loadProgress() {
    const savedProgress = localStorage.getItem("progress") || 0;
    progress = parseInt(savedProgress);
    document.getElementById("progressBar").value = progress;
    document.getElementById("progressText").textContent = progress + "%";
}

/* 🌐 Multi-Language Support */
const translations = {
    en: {
        title: "Student Tools Hub"
    },
    hi: {
        title: "छात्र उपकरण केंद्र"
    }
};

function changeLanguage(lang) {
    document.querySelector("h1").textContent = translations[lang].title;
}

/* ======================
   📅 STUDY SCHEDULE
====================== */
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    list.innerHTML += `
      <li>
        ${t.time} - ${t.task}
        <button onclick="deleteTask(${i})">❌</button>
      </li>
    `;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let task = document.getElementById("task").value;
  let time = document.getElementById("time").value;

  tasks.push({ task, time });
  renderTasks();
}

function deleteTask(i) {
  tasks.splice(i, 1);
  renderTasks();
}

renderTasks();


/* ======================
   📝 NOTES
====================== */
function saveNote() {
  let note = document.getElementById("note").value;
  localStorage.setItem("note", note);
  showNote();
}

function showNote() {
  document.getElementById("showNote").innerText =
    localStorage.getItem("note") || "No notes yet";
}

showNote();


/* ======================
   ⏰ ALARM
====================== */
let alarmTime = null;

function setAlarm() {
  alarmTime = document.getElementById("alarmTime").value;
  document.getElementById("alarmStatus").innerText =
    "Alarm set for " + alarmTime;
}

setInterval(() => {
  let now = new Date().toTimeString().slice(0,5);

  if (alarmTime === now) {
    alert("⏰ Time's up!");
    alarmTime = null;
  }
}, 1000);


/* ======================
   📊 CGPA
====================== */
function calcCGPA() {
  let g1 = Number(document.getElementById("g1").value);
  let g2 = Number(document.getElementById("g2").value);
  let g3 = Number(document.getElementById("g3").value);

  let cgpa = (g1 + g2 + g3) / 3;

  document.getElementById("cgpaResult").innerText =
    "CGPA: " + cgpa.toFixed(2);
}


/* ======================
   🎯 HABITS
====================== */
let habits = JSON.parse(localStorage.getItem("habits")) || [];

function renderHabits() {
  let list = document.getElementById("habitList");
  list.innerHTML = "";

  habits.forEach((h, i) => {
    list.innerHTML += `
      <li>
        <input type="checkbox"> ${h}
        <button onclick="deleteHabit(${i})">❌</button>
      </li>
    `;
  });

  localStorage.setItem("habits", JSON.stringify(habits));
}

function addHabit() {
  let h = document.getElementById("habit").value;
  habits.push(h);
  renderHabits();
}

function deleteHabit(i) {
  habits.splice(i, 1);
  renderHabits();
}

renderHabits();

/* 📢 Share Website */
function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: "Student Tools Hub",
            text: "Check out this amazing website!",
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
    }
}

/* Load Saved Data */
window.addEventListener("load", () => {
    loadProgress();
});
