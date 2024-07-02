function updateTimeAndDay() {
  const currentTimeElement = document.getElementById("currentUTCTime");
  const currentDayElement = document.getElementById("currentDay");
  const dateElement = document.getElementById("date");

  dateElement.textContent = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Get current time
  const now = new Date();

  // Get and format UTC time components
  const utcHour = now.getUTCHours().toString().padStart(2, "0");
  const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
  const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");
  currentTimeElement.textContent = `${utcHour}:${utcMinutes}:${utcSeconds}`;

  // Get and display current day of the week
  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = dayOfTheWeek[now.getUTCDay()];
  currentDayElement.textContent = currentDay;
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
