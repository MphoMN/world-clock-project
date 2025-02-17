let cities = {
  Johannesburg: "Africa/Johannesburg",
  London: "Europe/London",
  Tokyo: "Asia/Tokyo",
  Sydney: "Australia/Sydney",
  "New York": "America/New_York",
};

let selectedCity = "Johannesburg"; // Default city

function updateClock() {
  let timeZone = cities[selectedCity];
  let now = new Date(new Date().toLocaleString("en-US", { timeZone }));
  let hours = now.getHours() % 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  document.getElementById("hour-hand").style.transform = `rotate(${
    hours * 30 + minutes / 2
  }deg)`;
  document.getElementById("minute-hand").style.transform = `rotate(${
    minutes * 6
  }deg)`;
  document.getElementById("second-hand").style.transform = `rotate(${
    seconds * 6
  }deg)`;

  document.getElementById("digital-time").textContent =
    now.toLocaleTimeString();
  document.getElementById("date").textContent = now.toDateString();
}

document.getElementById("city-search").addEventListener("input", (e) => {
  let city = e.target.value;
  if (cities[city]) {
    selectedCity = city;
    document.getElementById("city-name").textContent = city;
  }
});

setInterval(updateClock, 1000);
updateClock(); // Initial update
