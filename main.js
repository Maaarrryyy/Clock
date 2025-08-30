const hourValue = document.getElementById("hour");
const minuteValue = document.getElementById("minutes");
const secondValue = document.getElementById("seconds");
const ampmValue = document.getElementById("ampm");

const hourDot = document.getElementById("dot-hour");
const minuteDot = document.getElementById("dot-minute");
const secondDot = document.getElementById("dot-second");

// ----------------------
// Update Clock Function
// ----------------------
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours < 12 ? "AM" : "PM";

  // Для отображения 12-часового формата
  const displayHours = hours % 12 || 12;

  // Update numbers
  hourValue.textContent = padZero(displayHours);
  minuteValue.textContent = padZero(minutes);
  secondValue.textContent = padZero(seconds);
  ampmValue.textContent = ampm;

  // Rotate dots around circle
  hourDot.style.transform = `rotate(${(hours / 12) * 360}deg)`;
  minuteDot.style.transform = `rotate(${(minutes / 60) * 360}deg)`;
  secondDot.style.transform = `rotate(${(seconds / 60) * 360}deg)`;
}

// ----------------------
// Utility: Pad zero
// ----------------------
function padZero(num) {
  return num.toString().padStart(2, "0");
}

// ----------------------
// Initialize
// ----------------------
updateClock();
setInterval(updateClock, 1000);
