# Day-07 Stopwatch

# ⏱ Stopwatch Web App

A simple and responsive Stopwatch application built using **HTML, CSS, and JavaScript**.  
This app allows users to start, pause, and reset a timer with accurate second tracking.

---

## 🚀 Features

- ▶️ Start Timer
- ⏸ Pause Timer
- 🔄 Reset Timer
- ⏱ Real-time second updates
- 🎨 Clean modern UI
- 📱 Fully responsive layout

---

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling & Layout (Flexbox)
- **JavaScript (ES6)** – Timer Logic & DOM manipulation

---

## 📂 Project Structure
stopwatch/
│
├── index.html   # Main structure
├── style.css    # Styling
└── script.js    # Stopwatch logic

---

## ⚙️ How It Works

1. The **Start** button triggers a `setInterval()` function.
2. Every 1000 milliseconds (1 second), the seconds value increases.
3. When seconds reach 60:
   - Seconds reset to 0
   - Minutes increase by 1
4. When minutes reach 60:
   - Minutes reset to 0
   - Hours increase by 1
5. The display updates dynamically using DOM manipulation.
6. The **Pause** button stops the interval using `clearInterval()`.
7. The **Reset** button clears the interval and resets time to `00:00:00`.

---

## 🧠 Concepts Used

- `setInterval()` and `clearInterval()`
- DOM Selection (`getElementById`)
- Dynamic Content Update (`textContent`)
- Conditional Statements
- Ternary Operator
- Template Literals
- Basic State Management

---

## 🖥️ Preview

A centered card layout displaying: 
00:00:00
[ Start ] [ Pause ] [ Reset ]

---

## 🔮 Future Improvements

- ⏱ Add Milliseconds
- 📝 Add Lap Timer Feature
- 🌙 Dark Mode Toggle
- 📊 Store Lap History
- 🎵 Add Sound Alert

---

## 🏁 How to Run

1. Download or clone this repository.
2. Open `index.html` in your browser.
3. Click **Start** to begin timing.

No installation required.

---

## 👩‍💻 Author

Built as a frontend practice project to strengthen understanding of JavaScript timers and DOM manipulation.
